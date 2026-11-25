# plog-web

`placelog.kr` 공개 웹사이트. GitHub Pages(main 브랜치 루트)로 배포한다.

| 경로 | 내용 |
|---|---|
| `/` | 앱 소개 (Play Console 조직 웹사이트 인증용) |
| `/terms/` `/privacy/` `/location/` `/community/` | 약관·정책 현행본 (버전별 고정본은 `v1.0/` 처럼 하위 경로) |
| `/account-deletion/` | 계정 삭제 안내 (Play 데이터 보안의 계정·데이터 삭제 URL) |
| `/g/` `/r/` `/u/` | 공유 링크(그룹·리뷰·프로필) 안내 페이지. 미리보기 카드(`og:*`, `assets/og-group.png` 등)만 다르고 본문은 같다. "앱에서 열기"와 카카오톡 밖에서 다시 열기 동작은 `assets/open-app.js` 에 있다 |
| `/.well-known/` | iOS Universal Links·Android App Links 확인 파일 |

약관·정책 페이지는 어드민에서 게시하면 이 저장소에 자동 커밋된다(작성자 `PLOG Admin`). 해당 경로의 `index.html` 을 손으로 고치지 말고 어드민에서 다시 게시한다.

계정 삭제 안내(`/account-deletion/`)는 손으로 관리하는 정적 페이지다.

이 저장소는 **공개**다. 내부 정보(서버 주소, 이슈 내용, 시크릿)를 넣지 않는다.
