# plog-web

`placelog.kr` 공개 웹사이트. GitHub Pages(main 브랜치 루트)로 배포한다.

| 경로 | 내용 |
|---|---|
| `/` | 앱 소개 (Play Console 조직 웹사이트 인증용) |
| `/terms/` `/privacy/` `/location/` `/community/` | 약관·정책 Notion 페이지로 이동 |
| `/account-deletion/` | 계정 삭제 안내 Notion 페이지로 이동 (Play 데이터 보안의 계정·데이터 삭제 URL) |
| `/g/` `/r/` `/u/` | 공유 링크(그룹·리뷰·프로필) 안내 페이지. 세 파일의 내용은 같고, "앱에서 열기" 동작은 `assets/open-app.js` 에 있다 |
| `/.well-known/` | iOS Universal Links·Android App Links 확인 파일 |

약관·정책 원본은 비공개 저장소 `plog-wiki/legal/` 이다. 이 저장소는 이동 주소만 가진다. 게시 매체를 바꾸면 각 `index.html` 의 URL 세 곳(canonical·refresh·script)만 고친다.

이 저장소는 **공개**다. 내부 정보(서버 주소, 이슈 내용, 시크릿)를 넣지 않는다.
