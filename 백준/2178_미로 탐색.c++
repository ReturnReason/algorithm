#include <bits/stdc++.h>
using namespace std;
int arr[104][104];
int visited[104][104];
int dy[4] = {-1, 0, 1, 0};
int dx[4] = {0, 1, 0, -1};

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int N, M;
	scanf("%d %d", &N, &M);
	
	for(int i = 0; i < N; i++){
		for(int j = 0; j < M; j++){
			scanf("%1d", &arr[i][j]);
		}
	}
	
	int y = 0;
	int x = 0;
	queue<pair<int, int>> q;
	visited[y][x] = 1;
	q.push({y, x});
	
	while(q.size()){
		tie(y, x) = q.front();
		q.pop();
		
		for(int i = 0; i < 4; i++){
			int ny = y + dy[i];
			int nx = x + dx[i];
			
			if(ny < 0 || nx < 0 || ny >= N || nx >= M) continue;
			if(visited[ny][nx]) continue;
      // visited[ny][nx] 찾을 때 == 1 하면 안됨!! 무한 루프 돌음 !
			if(arr[ny][nx] == 0) continue;
			visited[ny][nx] = visited[y][x] + 1;
			q.push({ny, nx});
			
		}
	}
	
	cout << visited[N-1][M-1];

	return 0;
}

/* 2022.10.30 BFS 복습, 재풀이 */

#include <bits/stdc++.h>
using namespace std;

int N, M, y, x;
int arr[104][104];
int visited[104][104];
int dy[4] = {-1, 0, 1, 0};
int dx[4] = {0, 1, 0, -1};

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	scanf("%d %d", &N, &M);
	
	for(int i = 0; i < N; i++){
		for(int j = 0; j < M; j++){
			scanf("%1d", &arr[i][j]);
		}
	}
	
	queue<pair<int, int>> q;
	q.push({0, 0});
	visited[0][0] = 1;

	
	while(q.size()){
		tie(y, x) = q.front();
		q.pop();
		
		for(int i = 0; i < 4; i++){
			int ny = y + dy[i];
			int nx = x + dx[i];
			
			if(ny < 0 || nx < 0 || ny >= N || nx >= M) continue;
			if(visited[ny][nx] || arr[ny][nx] == 0) continue;
			q.push({ny, nx});
			visited[ny][nx] = visited[y][x] + 1;
		}
	}
	
	printf("%d", visited[N - 1][M - 1]);

}	
