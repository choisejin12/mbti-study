const url = "https://dessert-mbti.netlify.app/";

function setShare() {
    var resultImg = document.querySelector("#resultImg");
    var resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = "디저트로보는 성격유형 결과";
    const shareDesc = infoList[resultAlt].name;
    const shareImg = url + "img/image-" + resultAlt + ".png";
    const shareUrl = url + "pages/result-" + resultAlt + ".html";

    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: shareTitle,
            description: shareDesc,
            imageUrl: shareImg,
            link: {
                mobileWebUrl: shareUrl,
                webUrl: shareUrl,
            },
        },
        buttons: [
            {
                title: '결과 확인하기',
                link: {
                    mobileWebUrl: shareUrl,
                    webUrl: shareUrl,
                }
            }
        ]
    });
}