/*
  큰돌의 터전 블로그 예시 문제 (종화는 방구쟁이야) 풀어보기
  문제 : https://blog.naver.com/PostView.naver?blogId=jhc9639&logNo=222289089015&categoryNo=137&parentCategoryNo=137&viewDate=&currentPage=2&postListTopCurrentPage=&from=postList&userTopListOpen=true&userTopListCount=5&userTopListManageOpen=false&userTopListCurrentPage=2

  미방문, 육지인 경우 dfs를 호출한다.
*/

#include <bits/stdc++.h>
using namespace std;

int _m[104][104];
int visited[104][104];
int dy[] = {-1, 0, 1, 0};
int dx[] = {0, 1, 0, -1};
int ret, y, x;

void dfs(int y, int x){
	visited[y][x] = 1;
	
	for(int i = 0; i < 4; i++){
		int ny = y + dy[i];
		int nx = x + dx[i];
		
		if(ny < 0 || nx < 0 || nx >= 100 || ny >= 100) continue;
		if(_m[ny][nx] == 1 && visited[ny][nx] == 0 ) dfs(ny, nx);
	}
}

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int N, M;
	cin >> N >> M;

	for(int i = 0; i < N; i++){
		for(int j = 0; j < M; j++){
			cin >> _m[i][j];
		}
	}
	
	for(int i = 0; i < N; i++){
		for(int j = 0; j < M; j++){
			if(_m[i][j] == 1 && visited[i][j] != 1){
				dfs(i, j);
				ret++;
			}
		}
	}
	
	cout << ret;
	
	return 0;
}