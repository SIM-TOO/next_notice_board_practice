1. 몽고 DB 연결
- npm install mongodb# next_notice_board_practice
- .env에 몽고DB url 입력

2. 조회/상세페이지 기능(Dynamic route)
- detail/[id]/page.js 참고
- 상세페이지 이동 기능(link & useRouter)
    - link : list/page.js 참고
    - useRouter : list/DetailLink.js 참고

3. 글 작성 기능
- pages/api/post/new 참고

4. 글 수정 기능
- edit/[id]/page.js 참고
- pages/api/post/edit.js 참고

5. 글 삭제 기능

- pages/api/post/delete.js 참고
