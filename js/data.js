/*
크로아상 0
1 1
2 2
3 3
4 4
5 5
6 6
7 7
젤라또 8
스콘 9
치즈케익 10
11 11
12 12
13 13
14 14
15 15

E - 크로아상,1,2,3,4,5,6,7
I - 젤라또,스콘,치즈케익,11,12,13,14,15

N - 크로아상,1,4,5,젤라또,스콘,12,13
S-2,,3,6,7,치즈케익,11,14,15

T-2,4,5,6,치즈케익,12,13,14
F-크로아상,1,3,7,젤라또,스콘,,11,15

P-마카롱,5,6,7,스콘,치즈케익,11,13
J-크로아상,2,3,4,젤라또,12,14,15

*/

const qnaList = [
    {
        q: "1. 디저트가 먹고 싶어진 나는?",
        a: [
            { answer: "a. 집에 있으려니 너무 답답해! 바람도 쐴 겸 직접 사러나간다. ", type: [0, 1, 2, 3, 4, 5, 6, 7] },
            { answer: "b. 나가기 귀찮은데 그냥 시켜먹는다.", type: [8, 9, 10, 11, 12, 13, 14, 15] }
        ]
    },
    {
        q: "2. 다양한 디저트중에서 나는?",
        a: [
            { answer: "a. 내가 생각해온 디저트는 이거야! 하며 생각해온 디저트를 산다. ", type: [0, 2, 3, 4, 8, 12, 14, 15] },
            { answer: "b. 이 디저트는 1+1이네? 자주 사먹진 않지만 저렴하므로 구매한다.", type: [1, 5, 6, 7, 9, 10, 11, 13] }
        ]
    },
    {
        q: "3. 처음 보는 디저트를 발견한 나는?",
        a: [
            { answer: "a. 저건 무슨 맛일까? 너무 궁금해!  ", type: [0, 1, 3, 7, 8, 9, , 11, 15] },
            { answer: "b. 맛없을수도 있지 않을까..? 나는 그냥 평소 먹던거 먹을래", type: [2, 4, 5, 6, 10, 12, 13, 14] }
        ]
    },
    {
        q: "4. 내가 좋아하는 디저트를 친궁게ㅔ 소개할때에 나는?",
        a: [
            { answer: "a. 이건 이런 식감이고.. 이런 맛이고.. 하며 자세하게 디저트의 특징을 설명한다. ", type: [2, , 3, 6, 7, 10, 11, 14, 15] },
            { answer: "b. 그냥 한번 먹어봐", type: [0, 1, 4, 5, 8, 9, 12, 13] }
        ]
    },
    {
        q: "5. 사온 디저트가 상해있었을때에 나는?",
        a: [
            { answer: "a. 상한 부분만 떼어서 먹으면 되겠지~ ", type: [2, 3, 6, 7, 10, 11, 14, 15] },
            { answer: "b. 상한 빵을 팔다니.. 당장 교환해와야겠어", type: [0, 1, 4, 5, 8, 9, 12, 13] }
        ]
    },
    {
        q: "6. 여행 갈 때 디저트를 준비하는 나는?",
        a: [
            { answer: "a. 이거는 금방 상하니까 1개.. 이거는 양이 많으니까 4개..", type: [0, 2, 3, 4, 8, 12, 14, 15] },
            { answer: "b. 그냥 다 x개씩 각각 챙긴다", type: [1, 5, 6, 7, 9, 10, 11, 13] }
        ]
    },
    {
        q: "7. 제일 좋아하는 디저트가 식탁 위에 있을 때 나는?",
        a: [
            { answer: "a. 누가 올려둔거지? 내가 먹어도 될까?하며 누군가에게 전화한다 ", type: [2, 4, 5, 6, 10, 12, 13, 14] },
            { answer: "b. 헐 대박", type: [0, 1, 3, 7, 8, 9, , 11, 15] }
        ]
    },
    {
        q: "8. 사람들이 많을 때에 나는?",
        a: [
            { answer: "a. 그래서 어떻게됐냐면~ 하며 대화를 이끌어나간다 ", type: [0, 1, 2, 3, 4, 5, 6, 7] },
            { answer: "b. 그래서 어떻게 됐는데? 하며 상대방의 이야기를 듣는다", type: [8, 9, 10, 11, 12, 13, 14, 15] }
        ]
    },
    {
        q: "9. 조별과제 중 새로운 방향을 제시하는 조원에게 나는?",
        a: [
            { answer: "a. 다음에 그렇게 해보자! 하며 기존의 방법으로 진행한다. ", type: [2, 3, 6, 7, 10, 11, 14, 15] },
            { answer: "b. 오? 괜찮은데 하며 아이디어를 반영한다.", type: [0, 1, 4, 5, 8, 9, 12, 13] }
        ]
    },
    {
        q: "10. 해야 하는 일이 많은데 놀고 싶을 때에 나는?",
        a: [
            { answer: "a. 미래의 나에게 맡긴다", type: [2, 4, 5, 6, 10, 12, 13, 14] },
            { answer: "b. 놀땐 놀더라도 맘편히 놀아야지.. 일을 마무리 하러 간다", type: [0, 1, 3, 7, 8, 9, , 11, 15] }
        ]
    },
    {
        q: "11. 룸메이트와 생활 규칙을 정할 때에 나는?",
        a: [
            { answer: "a. 한 번만 한 번만 하다가 규칙 없어져. 일관성있게 규칙을 정한다.", type: [1, 5, 6, 7, 9, 10, 11, 13] },
            { answer: "b. 어떤 일이 생길지 모르니까 융통성 있게 예외를 둔다", type: [0, 2, 3, 4, 8, 12, 14, 15] }
        ]
    },
    {
        q: "12. 디저트를 많이 구매했을 때 나는?",
        a: [
            { answer: "a. 친구들아 이것 좀 먹어봐!!", type: [0, 1, 2, 3, 4, 5, 6, 7] },
            { answer: "b. 친구들이 싫어하면 어쩌지? 물어보고 줄까?", type: [8, 9, 10, 11, 12, 13, 14, 15] }
        ]
    },

]

const infoList = [
    {
        name: "달을 닮은 부드럽고, 바삭한 식감을 가진 < 크로아상 >",
        desc: `온화하고 다정한 성격인 당신 ! 사교적이고, 타인의 의견을 존중하지만 자신의 의견이 비판을 받으면 예민하게 반응합니다.
        협력하여 무언가를 성공시키는걸 좋아합니다. 사랑에 빠지면 상대에게 맞춰주기 위해 노력하고 뭐든지 할려고 합니다.
        보호받는 걸 좋아하고, 좋아하는 상대앞에서는 완벽하게 보이기 위해 노력합니다.
        남들에게 착하고 헌신적이고 굳은 의지를 가진사람으로 보여지고 싶어하지만 현실은 주변에서 실수로 엄마라고 부르는 경우가 종종 있고, 
        남들 일에 관해 오지랖이 넓진않나 생각하지만 또 막상 그만두긴 힘들어합니다.
        당신은 외로운걸 싫어하여 홀로 남겨진 기분을 싫어하고 잔인한것을 싫어하고, 분열이 일어나는 걸 싫어합니다. 
        자신을 따라하는 친구를 보면 " 너 혹시 열등감느끼니? 어딜 넘봐" 라고 생각합니다.
        새로운 걸 좋아하지만 막상 익숙해지면 금방 질려합니다. 쇼핑을 할 때 친구나 지인이 사면 같이 사는 나도살래파입니다.
        곁에 있는 사람이 울면 따라 울기도 합니다. 하지만 " 넌 너무 감정적이야 ! "라는 말을 들으면 화가 난답니다.`
    },
    {
        name: "매끈하고 바삭한 꼬끄, 그 안은 부드러운 필링으로 이루어진 < 마카롱 >",
        desc: `긍정적이고 해피 바이러스 성격인 당신 ! 리드하는 걸 좋아합니다. 좋아하는 상대앞에서는 웃음을 감추지 못하는 타입입니다.
        만약 규칙이 있는 모임에 참가했다면 당신은 애초에 규칙이 있는 것도 몰랐을겁니다. 당신은 배신을 굉장히 싫어하며 지루함 또한 싫어하는 성격입니다.
        그리고 가짜, 즉 짝퉁을 싫어합니다. 자신을 따라하는 친구를 보면 " 이상해...기분나빠..어떻게 그럴 수가 있지 하지마.."라고 말하거나
        생각합니다. 남들에게 존경받는 것 그리고 칭찬받는 걸 좋아합니다. 그리고 당신은 나쁜 버릇이 있는데 그건 약속 당일 펑크내기입니다
        당신에게 절대 해서는 안되는 짓은 고집부리는 것 입니다. 웃고 있지만 속으로 웁니다.
        쇼핑을 할 때 과도한 생각 뒤 결국 아무것도 안 사는 산책나옴파입니다. 사람을 판단할 때 명확한 자기의 기준이 있습니다.`
    },
    {
        name: "금괴 모양을 하여 금전운을 부르는 부드러운식감을 가진 <휘낭시에>",
        desc: `냉철하고 지적인 성격을 가진 당신 ! 의외의 특성은 엄청 사려 깊음
        당신이 사랑에 빠진다면 " 응 사랑해 " , 짝사랑을 한다면 상대의 말에 경청을 합니다. 만약 규칙이 있는 모임에 참가했다면
        이미 당신은 규칙을 다 받아적어서 모두를 위해 복사본까지 마련했을거랍니다. 당신은 고장나는 걸 싫어하고 무시당하는걸 싫어합니다.
        그리고 자신의 인생 자기대로 못사는 구속적인 환경을 무지 싫어합니다. 자신을 따라한 친구를 보며 " 하긴 내가 좀 잘나야말이지.
        어디서 샀는지 말해줘?"라고 말합니다. 완벽한 시스템상황을 좋아합니다. 타인이 당신을 볼 땐 명석함,믿음직함, 늘 앞어 생각하는 사람이며
        생산적이고 경쟁심이 강하다고 생각합니다. 현실의 당신은 "선생님, 숙제 걷으셔야죠!" 라고 말하며 친구들의 눈총을 받기도하며
        자기 계발 비디오 중독이 매우 중증입니다. 당신은 젊은 꼰대라고도 말할수있겠습니다. 
        쇼핑을 할 때 0점짜리 리뷰를 모두 읽은 뒤에 구매하는 신중구매파입니다. 계속 당신을 쳐다보는걸 싫어합니다.`
    },
    {
        name: " 온 정성을 들여 만드는 달달한 < 약과 >",
        desc: `사교적이고 모범적인 성격을 가진 당신 ! 결단력있고 용맹합니다. 누군가 당신을 좋아한다면 그 사람은 당신 앞에서 으스댑니다.
        만약 규칙이 있는 모임에 참가했다면 당신은 모든 규칙을 지키기 위해서 최선을 다할것입니다.
        남한테 상처 주는 사람들을 싫어하고 말 처 안듣는 사람들을 극혐합니다. 자신을 따라한 친구를 보며 " 하긴 내가 좀 잘나야말이지.
        어디서 샀는지 말해줘?"라고 말합니다. 성공적인 팀플레이 상황을 좋아합니다. 당신은 뒷담을 좋아하는 나쁜 버릇이 있습니다.
        타인이 당신을 볼땐 진실되고 사랑이 많고 어딜 가든 친구를 만날 수 있는 기꺼이 착한 사마리아인이 될 수 있눈
        사람이라고 생각합니다. 현실은 행사가 있다면 자신이 직접 만든 물건을 못 줘서 안달 나있습니다. 당신의 자존감의
        99%는 상대방의 칭찬을 듣냐 못 듣느냐에 달려있습니다. 당신을 한마디로 표현한다면 X목러라고도 할수있습니다.
        쇼핑을 할 때 친구나 지인이 사면 같이 사는 나도살래파입니다. 당신 앞에서는 싸움은 금물!`
    },
    {
        name: " 달걀 노른자와 커스터드 크림이 만나 속은 부드럽고 촉촉한 질감을 가진 < 에그타르트 >",
        desc: `냉정하고 지휘적인 당신 ! 팀플레이 안 되는 사람들, 게이름, 멍청한 행동을 매우 싫어합니다.자신을 따라한 친구를 보며 " 하긴 내가 좀 잘나야말이지.
        어디서 샀는지 말해줘?"라고 말합니다. 최고 능률에 도달 하는 상황을 매우 좋아합니다. 당신이 갖기 쉬운 나쁜 버릇중하나는
        셀프로 주말출근입니다. 타인이 보는 당신은 권위적,효율적,전략적인 생각이 가능한 이상적인 리더상입니다.
        현실은 제대로 인상 쓸 줄 아는 사람, 무서운 인상이에요~라는 말 들으면서 내가 뭐 무섭담? 이라고 생각합니다.
        당신 앞에서 게으름은 금물! 쇼핑을 할 때에는 0점짜리 리뷰를 모두 읽은 뒤에 구매하는 신중구매파입니다.`
    },
    {
        name: " 다양한 잼과 재료를 이용하여 브런치로 즐겨먹는 < 식빵 >",
        desc: `쿨하고 말이 많고 주도적인 당신 ! 사회성이 매우 좋습니다. 누군가 당신을 좋아한다면 그 사람은
        당신 앞에서 오만함과 논쟁으로 자신을 증명할려고 노력합니다. 만약 규칙이 있는 모임에 참가했다면 당신은
        " 이 규칙들이 본 목적을 완전히 달성하지 못하고 있다는 걸 발견했어, 왜 그런지 설명해줄게"라며 규칙따위 가뿐히 무시합니다.
        당신은 고집 센 사람과 아무도 내 말을 들어주지 않는 상황을 싫어합니다.  자신을 따라한 친구를 보며 " 하긴 내가 좀 잘나야말이지.
        어디서 샀는지 말해줘?"라고 말합니다. 혁신적이고 뭐든 최첨단인 상황을 좋아합니다. 그리고 당신은 남 말을 끊는
        나쁜 버릇을 가지고있습니다. 타인이 당신을 볼땐 생각이 광속을 넘어서는 유일한 사람이고, 위트 있는 성격에 토론의 절대강자
        라고 생각합니다. 현실은 인터넷 유행어를 너무 많이 써서 넷팡인이란 소리를 듣고 다니고, 제일 많이 하는 말은 "음 그러니까",
        "아니 근데", "사실 말이야" 중 하나입니다. 당신을 한마디로 표현한다면 쿨병 말기라고 할수있겠습니다.
        쇼핑을 할 때 과도한 생각 뒤 결국 아무것도 안 사는 산책나옴파입니다. 당신 앞에선 위로는 금물!
        당신이 조별과제를 할 때에는 얼떨결에 제일 힘들 일을 맡기도합니다.`
    },
    {
        name: "달달하고 부드러움을 넘어서 말랑말랑한 식감을 가진 < 푸딩 >",
        desc: `직설적이고 호탕한 당신 ! 당신은 엄청나게 상냥합니다. 만약 규칙이 있는 모임에 참가했다면 당신은
        "규칙 어기기 도장깨기 할거다 !! "라며 규칙을 무시합니다. 당신은 단조로운 것, 관례적인 것 그리고 예민한 것들을
        굉장히 싫어합니다.자신을 따라한 친구를 보며 " 하긴 내가 좀 잘나야말이지.
        어디서 샀는지 말해줘?"라고 말합니다. 당신은 과속을 즐겨하는 나쁜 버릇이 있습니다.
        그래서 당신을 한마디로 표현한다면 일호선 광인이라고도 할 수 있겠습니다.
        타인이 당신을 볼 때 위험한 매력이 있는 사람, 위험을 친구 삼아 다니는 매력적이고 유명한 사람이라고 생각합니다.
        현싷을 장단점이 있는 일에서 단점은 보통 무시하고, 누가 "너 그거 못하지" 라는 말을 하면 양잿물을 마시기라도
        기꺼이 하는 성격입니다.  쇼핑을 할 때 귀엽거나 흥미로우면 구매하는 충동구매파쪽에 속합니다.
        타인이 당신에게 너무 복잡한 말과 행동을 하는건 금물! 당신이 조별과제를 할 때에 당신은 개썅마이웨이랍니다
        `
    },
    {
        name: "도넛형의 딱딱한 롤빵에 크림치즈등를 곁들여 먹는 < 베이글 >",
        desc: `입담이 뛰어나고 항상 바쁜 당신 ! 당신은 친구들 말은 잘 들어주는 좋은 친구입니다.
        누군가 당신을 좋아한다면 그 사람은 귀여운 방식으로 바보같이 행동하며 당신의 마음을 끌게 할 것입니다.
        만약 규칙이 있는 모임에 참가했다면 당신은 "규칙 어기면 벌금 내야 돼? 그냥 그거 낼게"라며 규칙은 가뿐히
        무시합니다. 당신은 외로움,설렘 없는 상황, 상호의존적인 관계를 싫어합니다.자신을 따라한 친구를 보며 " 하긴 내가 좀 잘나야말이지.
        어디서 샀는지 말해줘?"라고 말합니다. 관심받는 상황을 매우 좋아합니다. 한마디로 말하면 당신은 관종 그 자체입니다.
        당신은 자기도 모르게 소비하는 과도한 비용 지출이 나쁜 버릇중 하나입니다.타인이 볼 때 당신은 스타일,패션에 있어 당신을 따라갈 수 없고, 말도 안되게
        쿨하고 모든 파티에서 가장 주목받는 사람이라고 생각합니다. 현실은 당최 가만있질 못하는 정서불안인 경우가 몹시 많고,
        갤러리에 십중팔구 셀카대잔치가 났습니다.쇼핑을 할 때 귀엽거나 흥미로우면 구매하는 충동구매파쪽에 속합니다.
        누군가 당신에게 명령하는 것은 금물!`
    },
    {
        name: "아이스크림이지만 질감이 쫀득하고 맛과 향이 진한 <젤라또>",
        desc: `차갑지만 감성적이고 미묘한 당신! 처음에는 굉장히 조용합니다.
        만약 규칙이 있는 모임에 참가했다면 당신은 "나한테 도움이 안 되는 규칙들이니 그냥 내가 새로 만들겠어"라 생각합니다.
        당신은 오해받는 것, 허풍쟁이, 불공평한 것을 싫어합니다.자신을 따라하는 친구를 보면 " 이상해...기분나빠..어떻게 그럴 수가 있지 하지마.."라고 말하거나
        생각합니다. 자기 인정을 받거나 이해받는 것을 좋아합니다. 갖기 쉬운 나쁜 버릇중 하나는 청소를 미루는 것입니다.
        타인이 볼 때 당신은 만나본 모든 사람 중에서 가장 미스터리 한 사람, 사교성은 없지만 알수록 더 신비로운 사람이라고 생각합니다.
        현실은 매일매일 단 하루도 빼놓지 않고 셀프 자괴감을 매우 자주 하루도 안 거르고 느끼는 사람입니다.
        조별과제에서의 당신은 시키기도 전에 일을 다 끝내는 팀원입니다.
        쇼핑을 할 때 친구나 지인이 사면 같이 사는 나도살래파입니다. 누군가 당신과 동등하지 못한 관계를 요구하는 것은 금물!`
    },
    {
        name: "뻑뻑하다 싶을 정도로 촘촘하고 부슬부슬한 식감을 가진 <스콘>",
        desc: `눈물이 많고 요정같은 당신! 당신은 은근 너무 정리가 안되어있으면 패닉합니다.
        누군가 당신을 좋아할 때 당신이 사실을 알아챌 때쯤이면 이미 다른 사람을 좋아하고있을정도로 눈치가 없습니다.
        또한 만약 규칙이 있는 모임에 참가했다면 당신은 규칙이 있단느 사실조차 모른 채 남들이 왜 스트레스 받고 있는지 걱정합니다.
        편견, 힘의 논리, 능력 밖의 일을 던져주는 것을 매우 싫어합니다. 자신을 따라하는 친구를 보면 " 이상해...기분나빠..어떻게 그럴 수가 있지 하지마.."라고 말하거나
        생각합니다. 도덕적인 행동을 하는 상황을 매우 좋아합니다. 당신이 갖기 쉬운 나쁫 버릇중하나는 커피중독입니다
        타인이 본 당신은 EQ가 선천적으로 매우 높고, 영혼의 존재를 믿고 자연의 이치를 깨닫고 있으며 늘 사랑으로 가득한 사람이라고 생각합니다.
        현실은 오늘도 내가 바보짓을 했지 뭐니 깔깔깔을 매우 잘하고 또 자주합니다.
        당신앞에서 상대방 비하는 금물!`
    },
    {
        name: "겉은 갈색에 속은 노랗고 부드러운 <치즈케이크>",
        desc: ` 귀찮은게 많고 시니컬한 당신 ! 그렇지만 당신은 아주 친철합니다.누군가 당신을 좋아한다면 당신에게 직접 말함으로서
        당신의 관심을 끕니다. 또한 만약 규칙이 있는 모임에 참가했다면 당신은 " 이 규칙들은 남들에게 중요하겠지, 그리고 기분이
        좋으면 나도 뭐, 따를 수도 있어"라 생각합니다. 당신은 사생활 침해, 일방 또는 쌍방 결례, 통제 불가능한 상황을
        매우 싫어합니다. 자신을 따라하는 친구를 보면 " 너 혹시 열등감느끼니? 어딜 넘봐" 라고 생각합니다.
        검증 가능한 솔류션인 상황을 좋아합니다. 당신이 갖기 쉬운 나쁜 버릇중하나는 욕쟁이 입니다.
        타인이 보는 당신은 감정 기복이 1도 없으며 늘 합리적인 계산을 한다고 생각합니다. 현실은 연말 롤링페이퍼를
        돌리면 항상 "얘 말 하루 한마디라고 하긴함?" "개똥 고집"이라고 적혀있습니다.
        당신앞에서 비효율적인 행동은 금물!
        `
    },
    {
        name: "케이크지만 사각거리는 식감과 상큼한 맛이 훌륭한 <당근케이크>",
        desc: `호기심이 많고 예술적인 당신! 만약 규칙이 있는 모임에 참가했다면 당신은 "규칙을 다 어기고 있긴 한데,
        아무도 못 본 거 같으니 괜찮아"라고 생각합니다. 거절,가식,남한테 상처주는 사람을 매우 싫어합니다.자신을 따라하는 친구를 보면 " 이상해...기분나빠..어떻게 그럴 수가 있지 하지마.."라고 말하거나
        생각합니다.  도적적인 행동인 상황을 매우 좋아합니다. 당신이 갖기 쉬운 나쁜 버릇중 하나는
        TV보면서 폭음입니다. 타인이 보는 당신은 뛰어난 예술가이며 감정에 깊이가 있고 자연을 몹시 사랑합니다.
        현실은 그냥 자신이 나무이고 싶고, 싸우지말고 서로 사랑해라 왜 이게 안될까?라고 생각합니다. 평범한 히피족이죠.
        당신 앞에선 강요는 금물!`
    },
    {
        name: "진한 초콜릿향과 쫄깃한 식감이 매력적인 < 월넛브라우니 >",
        desc: `냉정하지만 생각이 깊은 당신 ! 만약 규칙이 있는 모임에 참가했다면 당신은 "이 규칙들의 모든 모순을 발견했어 그러니 그냥 무효라고 생각해"
        라 생각합니다.  당신은 아침드라마 5분전인 현실, 시키는 대로 따라 해야 되는 상황, 오류가 있는 정보를 매우 싫어합니다.
        당신을 따라하는 친구를 보면 " 너 혹시 열등감느끼니? 어딜 넘봐" 라고 생각합니다. 최고 능률에 도달하는 상황을 매우 좋아합니다.
        당신이 갖기 쉬운 나쁜 버릇중하나는 뭐든 미루는 것입니다. 타인이 보는 당신은 우월한 종자, 악당 총수급, 보통 누구보다 똑똑한 사람이라고 생각합니다.
        현실은 사지 빼고는 도대체 뭘 제자리에 갖다 놓는 꼴을 보지 못하고, 웃자고 한 말인지 진심으로 하는 소린지 본인도 구별을 하지 못합니다.
        당신 앞에선 계획 변경은 금물!
        `
    },
    {
        name: "달걀에 첨가하는 재료에 따라 메인요리, 디저트로 바뀌는 <오믈렛>",
        desc: `건조하지만 생각이 깊은 당신 ! 만약 규칙이 있는 모임에 참가했다면 당신은 " 각 규칙을 피해 갈 수 있는 방법을 찾았어"라 생각합니다.
        지나치게 진지한 사람들, 오해받는 것, 멍청한 행동을 싫어합니다. 당신을 따라하는 친구를 보면 " 너 혹시 열등감느끼니? 어딜 넘봐" 라고 생각합니다. 
        논리적으로 합당한 상황을 좋아합니다. 당신이 갖기쉬운 나쁜 버릇중 하나는 같은 옷을 3일이상 입는 것입니다.
        타인이 보는 당신은 남들은 검색해야 되는 걸 머리에 담고 다니고, 겸손하고 나서진 않지만 뭐든 알고 있는 천재적인 사람이라고 생각합니다.
        현실은 본인 꽂힌 분야에 ~성애자라고 붙여도 될 만큼 홀딱 빠지고 사는데 도움 안 되는 TMI 남발의 선두주자 입니다.
        당신 앞에선 간섭은 금물!`
    },
    {
        name: "커피로 만든 달콤하고 부드러운 식감의 디저트인 <티라미수>",
        desc: `분석적이고 무뚝뚝한 당신! 만약 규칙이 있는 모임에 참가했다면 당신은 이미 모든 걸 완료했답니다.
        당신은 상사가 부재중인 상황, 내가 쓸모없는 듯한 기분, 잘못된 평가를 받은 상황을 매우 싫어합니다.신을 따라하는 친구를 보면 " 너 혹시 열등감느끼니? 어딜 넘봐" 라고 생각합니다
        완벽한 시스템화인 상황을 좋아합니다. 당신이 갖기 쉬운 나쁜 버릇중하나는 손톱,입술을 물어뜯는것입니다.
        타인이 보는 당신은 법을 늘 준수하고 책임감 있는 성격이어서 늘 맡긴 일을 잘 해낸다고 생각합니다.
        현실은 가끔 하루 12시간 이상 잠을 잡니다.
        당신 앞에선 TMI는 금물!`
    },
    {
        name: "민트의 화한 맛과 달콤한 초코쿠키가 만나 독특한 맛을 내는 <민트초코쿠키>",
        desc: `수호적이고 따스한 당신 ! 만약 규칙이 있는 모임에 참가했다면 당신은 " 이 규칙들 다 짜증나!" 라고 말하며 규칙을 착실히 지킵니다.
        당신은 존중받지 못하는 상황, 자학개그,무심한 것들을 싫어합니다. 자신을 따라한 친구를 보며 " 하긴 내가 좀 잘나야말이지.
        어디서 샀는지 말해줘?"라고 말합니다. 당신이 갖기 쉬운 나쁜 버릇중하나는 습관적으로 "죄송합니다" 하는 것입니다.
        존경받는,칭찬받는 상황을 매우 좋아합니다. 타인이 보는 당신은 순진하고 마음이 여리고 우정을 가장 소중히 생각하는 사람이라고 생각합니다.
        현실은 싸움 나는 걸 너무나 극단적으로 싫어해서 드라마에서 싸움이 나도 TV끄고 바들바들떨곤합니다.
        당신 앞에서 돌직구는 금물!`
    },




]