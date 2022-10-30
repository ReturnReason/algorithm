#include <bits/stdc++.h>
using namespace std;

int dy[4] = {1, 0, -1, 0};
int dx[4] = {0, 1, 0, -1};
int visited[1004][1004];
int tomato[1004][1004];
int N, M, y, x, ret;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	cin >> M >> N;
	bool isDone = true;
	
	for(int i = 0; i < N; i++){
		for(int j = 0; j < M; j++){
			cin >> tomato[i][j];
			if(tomato[i][j] == 0){
				isDone = false;
			}
		}
	}
	
	queue<pair<int, int>> q;
	for(int i = 0; i < N; i++){
		for(int j = 0; j < M; j++){
			if(tomato[i][j] == 1){
				q.push({i, j});
				visited[i][j] = 1;
			}
		}
	}
	
	while(q.size()){
		tie(y, x) = q.front();
		q.pop();
		
		for(int i = 0; i < 4; i++){
			int ny = y + dy[i];
			int nx = x + dx[i];
			
			if(ny < 0 || nx < 0 || ny >= N || nx >= M) continue;
			if(tomato[ny][nx] == 1 || tomato[ny][nx] == -1) continue;
			if(visited[ny][nx]) continue;
			q.push({ny, nx});
			visited[ny][nx] = visited[y][x] + 1;
		}
	}
	
	// 모든 토마토가 익어있는 상태 
	if(isDone){
		cout << 0 << "\n";
		return 0;
	}
	
	// 다 안익었는지 확인 
	for(int i = 0; i < N; i++){
		for(int j = 0; j < M; j++){
			if(tomato[i][j] != -1 && visited[i][j] == 0){
				cout << -1;
				return 0;
			} else {
				ret = max(ret, visited[i][j]);
			}
		}
	}
	
	cout << ret - 1;
}	
