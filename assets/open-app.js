// 공유 링크 안내 페이지(/g/ /r/ /u/)의 "앱에서 열기" 버튼을 준비한다.
// 카카오톡 인앱 브라우저처럼 OS 에 링크를 넘기지 않는 앱에서는 앱이 깔려 있어도 이 페이지가 뜬다.
(function () {
  // 출시 전이라 소개 페이지로 보낸다. 출시 후 Play 스토어 주소로 바꾼다.
  var ANDROID_FALLBACK_URL = "https://placelog.kr/";
  var NUMBER = /^[0-9]+$/;
  var UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

  // 값을 검사한 뒤에만 앱 주소를 만들어, 주소에 넣은 임의 값이 앱으로 넘어가지 않게 한다.
  function appPath(page, id, groupId) {
    if (page === "g" && NUMBER.test(id)) return "group/detail?groupId=" + id;
    if (page === "r" && NUMBER.test(id) && NUMBER.test(groupId)) {
      return "review/detail?reviewId=" + id + "&groupId=" + groupId;
    }
    if (page === "u" && UUID.test(id)) return "user/detail?userId=" + id;
    return null;
  }

  var query = new URLSearchParams(location.search);
  var path = appPath(location.pathname.split("/")[1], query.get("id"), query.get("g"));
  if (!path) return;

  var button = document.getElementById("open-app");
  var notice = document.getElementById("app-missing");
  button.hidden = false;

  if (/Android/i.test(navigator.userAgent)) {
    button.href = "intent://" + path + "#Intent;scheme=plog;package=com.plog.plog_app;" +
      "S.browser_fallback_url=" + encodeURIComponent(ANDROID_FALLBACK_URL) + ";end";
    return;
  }

  // iOS 는 앱이 없어도 아무 반응이 없으므로, 앱으로 넘어가지 않았을 때 안내를 보인다.
  button.href = "plog://" + path;
  var timer;
  button.addEventListener("click", function () {
    clearTimeout(timer);
    timer = setTimeout(function () { notice.hidden = false; }, 1500);
  });
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) clearTimeout(timer);
  });
})();
