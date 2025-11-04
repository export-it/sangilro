const items = {
    10: { // 달음산 전체코스
        hasGroup : true, group: [11, 12, 13, 14, 15, 16] // 포함된 코스 ID
    },
    11: { // 달음산 1코스
        path: "달음산_1코스.json",
        color: "#fb0004",
        zIndex : 6,
    },
    12: { // 달음산 2코스
        path: "달음산_2코스.json",
        color: "#0b00ff",
        zIndex : 5,
    },
    13: { // 달음산 3코스
        path: "달음산_3코스.json",
        color: "#fc6806",
        zIndex : 4,
    },
    14: { // 달음산 4코스
        path: "달음산_4코스.json",
        color: "#ffff00",
        zIndex : 3,
    },
    15: { // 달음산 5코스
        path: "달음산_5코스.json",
        color: "#fb00ff",
        zIndex : 2,
    },
    16: { // 달음산 기타코스
        path: "달음산_기타코스.json",
        color: "#81b254",
        zIndex : 1,
    },
    20: { // 불광산 전체코스
        hasGroup : true,  group: [21, 22, 23, 24, 25] // 포함된 코스 ID
    },
    21: { // 불광산 1코스
        path: "불광산_1코스.json",
        color: "#fb0004",
        zIndex : 5
    },
    22: { // 불광산 2코스
        path: "불광산_2코스.json",
        color: "#fc6806",
        zIndex : 4
    },
    23: { // 불광산 3코스
        path: "불광산_3코스.json",
        color: "#fb00ff",
        zIndex : 3
    },
    24: {
        path: "불광산_기타코스.json",
        color: "#81b254",
        zIndex : 2
    },
    25: {
        path: "불광산_임도.json",
        color: "#22ff05",
        zIndex : 1
    }
};

const imageMap = {
    "087": [
        {
            "dir": "달음산",
            "file": "001",
            "name": "종합안내판",
            "content": "1600*1200",
            "icon": "icon_01"
        }
    ],
    "088": [
        {
            "dir": "달음산",
            "file": "002",
            "name": "종합안내판",
            "content": "1800*1200",
            "icon": "icon_01"
        },
        {
            "dir": "달음산",
            "file": "003",
            "name": "해충기피분사기",
            "content": "1개소",
            "icon": "icon_10"
        },
        {
            "dir": "달음산",
            "file": "004",
            "name": "경고판",
            "content": "600*1000",
            "icon": "icon_08"
        }
    ],
    "089": [
        {
            "dir": "달음산",
            "file": "005",
            "name": "사각정자",
            "content": "4000*2500",
            "icon": "icon_09"
        }
    ],
    "090": [
        {
            "dir": "달음산",
            "file": "006",
            "name": "방향안내판",
            "content": "2방향",
            "icon": "icon_03"
        }
    ],
    "093": [
        {
            "dir": "달음산",
            "file": "007",
            "name": "방향안내판",
            "content": "3방향",
            "icon": "icon_03"
        },
        {
            "dir": "달음산",
            "file": "008",
            "name": "등의자",
            "content": "L=1.6m 2개",
            "icon": "icon_02"
        },
        {
            "dir": "달음산",
            "file": "009",
            "name": "평상",
            "content": "1개",
            "icon": "icon_02"
        }
    ],
    "102": [
        {
            "dir": "달음산",
            "file": "010",
            "name": "방향안내판",
            "content": "3방향",
            "icon": "icon_03"
        },
        {
            "dir": "달음산",
            "file": "011",
            "name": "평의자",
            "content": "L=1.6m 1개",
            "icon": "icon_02"
        },
        {
            "dir": "달음산",
            "file": "012",
            "name": "안내판",
            "content": "600*700",
            "icon": "icon_05"
        }
    ],
    "103": [
        {
            "dir": "달음산",
            "file": "013",
            "name": "등의자",
            "content": "L=1.6m 2개",
            "icon": "icon_02"
        },
        {
            "dir": "달음산",
            "file": "014",
            "name": "식탁의자",
            "content": "1600*1800",
            "icon": "icon_02"
        }
    ],
    "112": [
        {
            "dir": "달음산",
            "file": "015",
            "name": "방향안내판",
            "content": "4방향",
            "icon": "icon_03"
        }
    ],
    "113": [
        {
            "dir": "달음산",
            "file": "016",
            "name": "방향안내판",
            "content": "3방향",
            "icon": "icon_03"
        }
    ],
    "118": [
        {
            "dir": "달음산",
            "file": "017",
            "name": "방향안내판",
            "content": "3방향",
            "icon": "icon_03"
        }
    ],
    "119": [
        {
            "dir": "달음산",
            "file": "018",
            "name": "방향안내판",
            "content": "2방향",
            "icon": "icon_03"
        }
    ],
    "120": [
        {
            "dir": "달음산",
            "file": "019",
            "name": "방향안내판",
            "content": "4방향",
            "icon": "icon_03"
        }
    ],
    "032": [
        {
            "dir": "달음산",
            "file": "020",
            "name": "방향안내판",
            "content": "6방향",
            "icon": "icon_03"
        }
    ],
    "026": [
        {
            "dir": "달음산",
            "file": "021",
            "name": "방향안내판",
            "content": "2방향",
            "icon": "icon_03"
        }
    ],
    "024": [
        {
            "dir": "달음산",
            "file": "022",
            "name": "경고판",
            "content": "600*800",
            "icon": "icon_08"
        }
    ],
    "020": [
        {
            "dir": "달음산",
            "file": "023",
            "name": "방향안내판",
            "content": "4방향",
            "icon": "icon_03"
        }
    ],
    "012": [
        {
            "dir": "달음산",
            "file": "024",
            "name": "방향안내판",
            "content": "4방향",
            "icon": "icon_03"
        }
    ],
    "139": [
        {
            "dir": "달음산",
            "file": "025",
            "name": "평상",
            "content": "2400*2400",
            "icon": "icon_02"
        }
    ],
    "137": [
        {
            "dir": "달음산",
            "file": "026",
            "name": "평상",
            "content": "2400*2400",
            "icon": "icon_02"
        },
        {
            "dir": "달음산",
            "file": "027",
            "name": "등의자",
            "content": "L=1.6m 2개",
            "icon": "icon_02"
        }
    ],
    "135": [
        {
            "dir": "달음산",
            "file": "028",
            "name": "방향안내판",
            "content": "6방향",
            "icon": "icon_03"
        }
    ],
    "134": [
        {
            "dir": "달음산",
            "file": "029",
            "name": "방향안내판",
            "content": "5방향",
            "icon": "icon_03"
        },
        {
            "dir": "달음산",
            "file": "030",
            "name": "평상",
            "content": "2400*2400",
            "icon": "icon_02"
        }
    ],
    "001": [
        {
            "dir": "달음산",
            "file": "031",
            "name": "종합안내판",
            "content": "1800*1600",
            "icon": "icon_01"
        },
        {
            "dir": "달음산",
            "file": "032",
            "name": "해충기피분사기",
            "content": "1개소",
            "icon": "icon_10"
        }
    ],
    "002": [
        {
            "dir": "달음산",
            "file": "033",
            "name": "방향안내판",
            "content": "3방향",
            "icon": "icon_03"
        }
    ],
    "003": [
        {
            "dir": "달음산",
            "file": "034",
            "name": "방향안내판",
            "content": "3방향",
            "icon": "icon_03"
        }
    ],
    "004": [
        {
            "dir": "달음산",
            "file": "035",
            "name": "종합안내판",
            "content": "2000*2000",
            "icon": "icon_01"
        }
    ],
    "005": [
        {
            "dir": "달음산",
            "file": "036",
            "name": "평상",
            "content": "2200*2400",
            "icon": "icon_02"
        }
    ],
    "006": [
        {
            "dir": "달음산",
            "file": "037",
            "name": "등의자",
            "content": "L=1.6m 1개",
            "icon": "icon_02"
        }
    ],
    "007": [
        {
            "dir": "달음산",
            "file": "038",
            "name": "등의자",
            "content": "L=1.6m 2개",
            "icon": "icon_02"
        },
        {
            "dir": "달음산",
            "file": "039",
            "name": "평상",
            "content": "2200*2400",
            "icon": "icon_02"
        }
    ],
    "008": [
        {
            "dir": "달음산",
            "file": "040",
            "name": "등의자",
            "content": "L=1.6m 1개",
            "icon": "icon_02"
        },
        {
            "dir": "달음산",
            "file": "041",
            "name": "식탁의자",
            "content": "1600*1800",
            "icon": "icon_02"
        }
    ],
    "011": [
        {
            "dir": "달음산",
            "file": "042",
            "name": "방향안내판",
            "content": "2방향",
            "icon": "icon_03"
        }
    ],
    "040": [
        {
            "dir": "달음산",
            "file": "043",
            "name": "방향안내판",
            "content": "4방향",
            "icon": "icon_03"
        },
        {
            "dir": "달음산",
            "file": "044",
            "name": "등의자",
            "content": "L=1.6m 2개",
            "icon": "icon_02"
        },
        {
            "dir": "달음산",
            "file": "045",
            "name": "식탁의자",
            "content": "1600*1800",
            "icon": "icon_02"
        }
    ],
    "039": [
        {
            "dir": "불광산",
            "file": "001",
            "name": "안내판",
            "content": "2400*1200",
            "icon": "icon_05"
        }
    ],
    "045": [
        {
            "dir": "불광산",
            "file": "002",
            "name": "방향안내판",
            "content": "4방향",
            "icon": "icon_03"
        },
        {
            "dir": "불광산",
            "file": "003",
            "name": "방향안내판",
            "content": "3방향",
            "icon": "icon_03"
        }
    ],
    "047": [
        {
            "dir": "불광산",
            "file": "004",
            "name": "방향안내판",
            "content": "3방향",
            "icon": "icon_03"
        },
        {
            "dir": "불광산",
            "file": "005",
            "name": "경고판",
            "content": "1개소",
            "icon": "icon_08"
        }
    ],
    "049": [
        {
            "dir": "불광산",
            "file": "006",
            "name": "평의자",
            "content": "2개소",
            "icon": "icon_02"
        }
    ],
    "051": [
        {
            "dir": "불광산",
            "file": "007",
            "name": "방향안내판",
            "content": "4방향",
            "icon": "icon_03"
        },
        {
            "dir": "불광산",
            "file": "008",
            "name": "평의자",
            "content": "2개소",
            "icon": "icon_02"
        }
    ],
    "052": [
        {
            "dir": "불광산",
            "file": "009",
            "name": "식탁의자",
            "content": "1개소",
            "icon": "icon_02"
        }
    ],
    "053": [
        {
            "dir": "불광산",
            "file": "010",
            "name": "평의자",
            "content": "2개소",
            "icon": "icon_02"
        },
        {
            "dir": "불광산",
            "file": "011",
            "name": "방향안내판",
            "content": "5방향",
            "icon": "icon_03"
        }
    ],
    "054": [
        {
            "dir": "불광산",
            "file": "012",
            "name": "평의자",
            "content": "1개소",
            "icon": "icon_02"
        }
    ],
    "056": [
        {
            "dir": "불광산",
            "file": "013",
            "name": "식탁의자",
            "content": "1개소",
            "icon": "icon_02"
        }
    ],
    "057": [
        {
            "dir": "불광산",
            "file": "014",
            "name": "평의자",
            "content": "1개소",
            "icon": "icon_02"
        }
    ],
    "058": [
        {
            "dir": "불광산",
            "file": "015",
            "name": "식탁의자",
            "content": "1개소",
            "icon": "icon_02"
        },
        {
            "dir": "불광산",
            "file": "016",
            "name": "방향안내판",
            "content": "4방향",
            "icon": "icon_03"
        }
    ],
    "059": [
        {
            "dir": "불광산",
            "file": "017",
            "name": "방향안내판",
            "content": "3방향",
            "icon": "icon_03"
        }
    ],
    "060": [
        {
            "dir": "불광산",
            "file": "018",
            "name": "평의자",
            "content": "1개소",
            "icon": "icon_02"
        }
    ],
    "062": [
        {
            "dir": "불광산",
            "file": "019",
            "name": "식탁의자",
            "content": "1개소",
            "icon": "icon_02"
        }
    ],
    "064": [
        {
            "dir": "불광산",
            "file": "020",
            "name": "방향안내판",
            "content": "3방향",
            "icon": "icon_03"
        }
    ],
    "065": [
        {
            "dir": "불광산",
            "file": "021",
            "name": "방향안내판",
            "content": "2방향",
            "icon": "icon_03"
        },
        {
            "dir": "불광산",
            "file": "022",
            "name": "평의자",
            "content": "3개소",
            "icon": "icon_02"
        }
    ],
    "066": [
        {
            "dir": "불광산",
            "file": "023",
            "name": "방향안내판",
            "content": "2방향",
            "icon": "icon_03"
        },
        {
            "dir": "불광산",
            "file": "024",
            "name": "안내판",
            "content": "1000*1000",
            "icon": "icon_05"
        }
    ],
    "068": [
        {
            "dir": "불광산",
            "file": "025",
            "name": "방향안내판",
            "content": "3방향",
            "icon": "icon_03"
        }
    ],
    "069": [
        {
            "dir": "불광산",
            "file": "026",
            "name": "방향안내판",
            "content": "2방향",
            "icon": "icon_03"
        }
    ],
    "070": [
        {
            "dir": "불광산",
            "file": "027",
            "name": "평의자",
            "content": "2개소",
            "icon": "icon_02"
        }
    ],
    "071": [
        {
            "dir": "불광산",
            "file": "028",
            "name": "방향안내판",
            "content": "5방향",
            "icon": "icon_03"
        }
    ],
    "072": [
        {
            "dir": "불광산",
            "file": "029",
            "name": "방향안내판",
            "content": "2방향",
            "icon": "icon_03"
        }
    ],
    "091": [
        {
            "dir": "불광산",
            "file": "030",
            "name": "평의자",
            "content": "3개소",
            "icon": "icon_02"
        },
        {
            "dir": "불광산",
            "file": "031",
            "name": "경고안내판",
            "content": "900*600",
            "icon": "icon_05"
        }
    ],
    "092": [
        {
            "dir": "불광산",
            "file": "032",
            "name": "종합안내판",
            "content": "2400*1400",
            "icon": "icon_01"
        },
        {
            "dir": "불광산",
            "file": "033",
            "name": "경고안내판",
            "content": "600*900",
            "icon": "icon_05"
        }
    ],
    "096": [
        {
            "dir": "불광산",
            "file": "034",
            "name": "사각정자",
            "content": "3600*3000",
            "icon": "icon_09"
        }
    ],
    "098": [
        {
            "dir": "불광산",
            "file": "035",
            "name": "등의자",
            "content": "L=1.6m 3개소",
            "icon": "icon_02"
        },
        {
            "dir": "불광산",
            "file": "036",
            "name": "등의자",
            "content": "L=1.6m 3개소",
            "icon": "icon_02"
        }
    ],
    "100": [
        {
            "dir": "불광산",
            "file": "037",
            "name": "평의자",
            "content": "6개소",
            "icon": "icon_02"
        },
        {
            "dir": "불광산",
            "file": "038",
            "name": "평의자",
            "content": "6개소",
            "icon": "icon_02"
        }
    ],
    "101": [
        {
            "dir": "불광산",
            "file": "039",
            "name": "경고안내판",
            "content": "600*1200",
            "icon": "icon_05"
        }
    ],
    "037": [
        {
            "dir": "불광산",
            "file": "040",
            "name": "해충기피분사기",
            "content": "1개소",
            "icon": "icon_10"
        }
    ],
    "149": [
        {
            "dir": "불광산",
            "file": "041",
            "name": "종합안내판",
            "content": "1개소",
            "icon": "icon_01"
        }
    ],
    "151": [
        {
            "dir": "불광산",
            "file": "042",
            "name": "안내판",
            "content": "1000*700",
            "icon": "icon_05"
        }
    ],
    "152": [
        {
            "dir": "불광산",
            "file": "043",
            "name": "평상",
            "content": "1700*1700",
            "icon": "icon_02"
        }
    ],
    "157": [
        {
            "dir": "불광산",
            "file": "044",
            "name": "방향안내판",
            "content": "3방향",
            "icon": "icon_03"
        }
    ],
    "159": [
        {
            "dir": "불광산",
            "file": "045",
            "name": "안내판",
            "content": "600*800",
            "icon": "icon_05"
        }
    ],
    "160": [
        {
            "dir": "불광산",
            "file": "046",
            "name": "식탁의자",
            "content": "1개소",
            "icon": "icon_02"
        }
    ],
    "161": [
        {
            "dir": "불광산",
            "file": "047",
            "name": "방향안내판",
            "content": "3방향",
            "icon": "icon_03"
        }
    ],
    "162": [
        {
            "dir": "불광산",
            "file": "048",
            "name": "식탁의자",
            "content": "1개소",
            "icon": "icon_02"
        }
    ],
    "163": [
        {
            "dir": "불광산",
            "file": "049",
            "name": "방향안내판",
            "content": "4방향",
            "icon": "icon_03"
        }
    ],
    "164": [
        {
            "dir": "불광산",
            "file": "050",
            "name": "방향안내판",
            "content": "4방향",
            "icon": "icon_03"
        }
    ],
    "165": [
        {
            "dir": "불광산",
            "file": "051",
            "name": "안내판",
            "content": "1400*800",
            "icon": "icon_05"
        }
    ],
    "166": [
        {
            "dir": "불광산",
            "file": "052",
            "name": "방향안내판",
            "content": "2방향",
            "icon": "icon_03"
        }
    ],
    "184": [
        {
            "dir": "불광산",
            "file": "053",
            "name": "방향안내판",
            "content": "3방향",
            "icon": "icon_03"
        }
    ],
    "186": [
        {
            "dir": "불광산",
            "file": "054",
            "name": "방향안내판",
            "content": "3방향",
            "icon": "icon_03"
        }
    ],
    "188": [
        {
            "dir": "불광산",
            "file": "055",
            "name": "방향안내판",
            "content": "4방향",
            "icon": "icon_03"
        }
    ],
    "196": [
        {
            "dir": "불광산",
            "file": "056",
            "name": "방향안내판",
            "content": "3방향",
            "icon": "icon_03"
        }
    ],
    "198": [
        {
            "dir": "불광산",
            "file": "057",
            "name": "방향안내판",
            "content": "3방향",
            "icon": "icon_03"
        }
    ],
    "199": [
        {
            "dir": "불광산",
            "file": "058",
            "name": "방향안내판",
            "content": "3방향",
            "icon": "icon_03"
        }
    ]
}

function loadJSON(item) {
    // 이미 데이터가 로드된 경우, fetch 요청을 생략하고 Promise를 즉시 반환
    if (item.data) {
        fastDraw(item.data, item);
        return Promise.resolve(); // 이미 완료된 Promise 반환
    }

    // 데이터가 없는 경우, fetch 요청 수행
    return fetch(`./data/${item.path}`)
        .then(response => response.json())
        .then(data => {
            item.data = data; // 로드된 데이터를 캐싱
            fastDraw(data, item); // 데이터로 지도에 그리기
        })
        .catch(err => {
            console.error('Error loading JSON:', err);
        });
}

function findCourseById(id) {
    id = parseInt(id, 10); // 문자열을 숫자로 변환
    return id;
}


function handleCourseSelection(course_id) {
    mapControl.clear();
    const item = items[course_id];
    if (item.hasGroup) {
        const loadPromises = item.group.map(course => loadJSON(items[course]));
        Promise.all(loadPromises).then(() => mapControl.setCurrentBounds());
    } else {
        loadJSON(item).then(() => mapControl.setCurrentBounds());
    }
}

function tabControl() {
    document.querySelectorAll(".tab").forEach(tab => {
        tab.addEventListener("click", () => {
            // 모든 탭 비활성화
            document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
            document.querySelectorAll(".course_list").forEach(list => list.classList.remove("active"));
            tab.classList.add("active");
            const targetList = document.querySelector(tab.dataset.target);
            targetList.classList.add("active");
            const courseBtn = document.getElementById('course_btn');
            if (!courseBtn.classList.contains('open')) {
              courseBtn.classList.add('open');
            }            
        });
    });
}

function handleSelector() {
    document.querySelectorAll(".course_btn").forEach(button => {
        button.addEventListener("click", () => {
            const dataId = button.getAttribute("data"); // 버튼의 data 속성
            const selectedCourse = findCourseById(dataId); // 코스 정보 찾기
            // 모든 버튼에서 'on' 클래스 제거
            document.querySelectorAll(".course_btn").forEach(btn => btn.classList.remove("on"));
            // 클릭된 버튼에 'on' 클래스 추가
            button.classList.add("on");
            handleCourseSelection(selectedCourse);
        });
    });
}

// 셀렉터 초기화
tabControl();
handleSelector();