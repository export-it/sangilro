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

    drawMarker(markers, item, current_name) {
        markers.forEach(marker => {
            const numberMarkers = this._createNumberMarkers(marker, current_name);
            numberMarkers.setMap(this.map);
            this.markers.push(numberMarkers);
        });
    }

    _createNumberMarkers(marker, current_name) {
        console.log(marker);
        console.log(current_name);
        const marker_name = marker.name?.replace(/^0+/, "") || "";
		var customOverlay = new kakao.maps.CustomOverlay({
			map: map,
			content: `<div class="number-marker" style="background:${current_name === marker.name ? '#2866cc' : '#fff'};">${marker_name}</div>`, 
			position: new kakao.maps.LatLng(marker.point.lat, marker.point.lon),
            zIndex: current_name === marker.name ? 1000 : 1
		});
		return customOverlay;
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

function fastDraw(data, options, current_name) {
    mapControl.drawPolyline(data.polyline, options);
    mapControl.drawMarker(data.marker, options, current_name);
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