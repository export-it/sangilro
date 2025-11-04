// 지도 초기화
var mapContainer = document.getElementById('map');
var mapOption = {
    center: new kakao.maps.LatLng(35.3091391, 129.2079515), // 중심 좌표 (예시)
    level: 8, // 확대 레벨,
    mapTypeId : kakao.maps.MapTypeId.SKYVIEW
};
var map = new kakao.maps.Map(mapContainer, mapOption);
map.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
class MapControl {
    constructor(map) {
        this.map = map;
        this.polylines = [];
        this.markers = [];
        this.overlay = null;
    }
    clear() {
        this.clearOverlay();
        this.polylines.forEach(polyline => polyline.setMap(null));
        this.polylines = [];

        // 마커 제거
        this.markers.forEach(marker => marker.setMap(null));
        this.markers = [];
    }

    clearOverlay() {
        if (this.overlay) {
            this.overlay.setMap(null);
            this.overlay = null;
        }
    }

    setCurrentBounds() {
        const bounds = new kakao.maps.LatLngBounds();
        this.polylines.forEach(polyline => {
            polyline.getPath().forEach(latLng => {
                bounds.extend(latLng);
            })
        });
        this.markers.forEach(marker => {
            bounds.extend(marker.getPosition());
        })
        map.setBounds(bounds);
        return bounds;
    }

    drawPolyline(polylines, item) {
        polylines.forEach(segment => {
            const path = segment.map(coord => {
                const latLng = new kakao.maps.LatLng(coord.lat, coord.lon);
                return latLng;
            }
            );
            const polyline = new kakao.maps.Polyline({
                path: path,
                strokeWeight: 5,
                strokeColor: item.color,
                strokeOpacity: 0.7,
                strokeStyle: 'solid',
                zIndex : item.zIndex ?? 1
            });
            this.polylines.push(polyline);
            polyline.setMap(this.map);
        });
    }

    drawMarker(markers, item) {
        markers.forEach(marker => {
            const infos = imageMap[marker.name] || [];
            infos.forEach(info => {
                var imageMarker = this._createImageMarker(marker, info );
                imageMarker.setMap(this.map);


                this.markers.push(imageMarker);
            });
        });
    }

    _createImageMarker(marker, info) {
        
        var icon = new kakao.maps.MarkerImage(
            './static/image/icon/'+ info.icon + '.png',
            new kakao.maps.Size(27, 27)
        );
        const imageMarker =  new kakao.maps.Marker({
            position: new kakao.maps.LatLng(marker.point.lat, marker.point.lon),
            image: icon
        });
        kakao.maps.event.addListener(imageMarker, 'click', () => {
            this._info_marker(marker, info);
        });
        return imageMarker;
    }

    _info_marker(marker, info) {
        var img_src ="";
        this.clearOverlay();
        var img_src =`./static/image/${info.dir}/${info.file}.jpg`;
        var content = '<div class="map-info">' + 
        '<div class="info-body on">' +
        '  <div class="body-top">' +
        '   <div class="info-contents">' +
        '      <div class="info-title">'+ info.name + '</div>' +
        '      <ul class="info-meta">' +
        '        <li><i class="fa-regular fa-file-lines"></i><span class="txt">'+info.content+'</span></li>' +
        '      </ul>' +
        '    </div>' +
        '    <div class="info-image"><img src="'+img_src+'" alt="" onerror="this.src=\'img/no_img.png\'"></div>' +
        '  </div>' +
    
        '  <button type="button" class="btn-close" onclick="mapControl.clearOverlay();"><span class="blind">닫기</span></button>' +
        '</div>' +
        '</div>';

        this.overlay = new kakao.maps.CustomOverlay({
            content: content,
            map: this.map,
            position: new kakao.maps.LatLng(marker.point.lat, marker.point.lon) 
        });
        
        map.panTo(this.overlay.getPosition());
    }

    getLevel() {
        return this.map.getLevel();
    }

    setLevel(level) {
        return this.map.setLevel(level);
    }
}

const mapControl = new MapControl(map);
// JSON 파일 로드 및 지도 표시

function fastDraw(data, options) {
    mapControl.drawPolyline(data.polyline, options);
    mapControl.drawMarker(data.marker);
}

function setRelativeMapLevel(delta) {
    mapControl.setLevel(mapControl.getLevel() + delta);
}
// JSON 파일 로드
document.querySelector('.satellite_btn').classList.add('active');
function toggleSatelliteMap() {
    if (map.getMapTypeId() === kakao.maps.MapTypeId.SKYVIEW) {
        map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
        document.querySelector('.satellite_btn').classList.remove('active');
    } else {
        map.setMapTypeId(kakao.maps.MapTypeId.SKYVIEW);
        document.querySelector('.satellite_btn').classList.add('active');
    }
}


var isTerrainMap = true;
document.querySelector('.terrain_btn').classList.add('active');

function toggleTerrainMap() {
    if (isTerrainMap) {
        map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
        document.querySelector('.terrain_btn').classList.remove('active');
        isTerrainMap = false;
    } else {
        map.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
        document.querySelector('.terrain_btn').classList.add('active');
        isTerrainMap = true;
    }
}