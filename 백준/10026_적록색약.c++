#include <bits/stdc++.h>
using namespace std;

int visited[104][104];
int mp[104][104];
int dy[4] = { 1, 0, -1, 0};
int dx[4] = { 0, 1, 0, -1};
int y, x, N;

void BFS(int y,  int x){
	queue<pair<int, int>> q;
	q.push({y, x});
	visited[y][x] = 1;
	
	while(q.size()){
		tie(y, x) = q.front();
		q.pop();
		
		for(int i = 0; i < 4; i++){
			int ny = y + dy[i];
			int nx = x + dx[i];
			
			if(ny < 0 || nx < 0 || ny >= N || nx >= N) continue;
			if(visited[ny][nx]) continue;
			if(mp[y][x] != mp[ny][nx]) continue;
			visited[ny][nx] = 1;
			q.push({ny, nx});
		}
	}
}

int connected(){
	int cnt = 0;
	for(int i = 0; i < N; i++){
		for(int j = 0; j < N; j++){
			if(!visited[i][j]){
				cnt++;
				BFS(i, j);
			}
		}
	}
	return cnt;
}

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	scanf("%d", &N);
	
	for(int i = 0; i < N; i++){
		for(int j = 0; j < N; j++){
			scanf(" %c", &mp[i][j]);
		}
	}
	
	int result1 = connected();
	
	for(int i = 0; i < N; i++){
		for(int j = 0; j < N; j++){
			visited[i][j] = 0;
		}
	}
	
	for(int i = 0 ; i < N; i++){
		for(int j = 0; j < N; j++){
			if(mp[i][j] == 'R'){
				mp[i][j] = 'G';
			}
		}
	}
	
	int result2 = connected();
	printf("%d %d", result1, result2);
	
	return 0;
}