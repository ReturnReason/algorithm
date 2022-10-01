#include <bits/stdc++.h>
using namespace std;

int T, N, M;
int dy[] = {-1, 0, 1, 0};
int dx[] = {0, 1, 0, -1};
int a[54][54] = {0, };
int visited[54][54] = {0, };

void DFS(int y, int x){
	visited[y][x] = 1;
	
	for(int i = 0; i < 4; i++){
		int ny = y + dy[i];
		int nx = x + dx[i];
		
		if(ny < 0 || nx < 0 || ny >= N || nx >= M ) continue;
		if(a[ny][nx] == 1 && visited[ny][nx] == 0){
			DFS(ny, nx);
		}
	}
	return;
}

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	scanf("%d", &T);
	
	while(T--){
		int K = 0;
		int ret = 0;
		
		scanf("%d %d %d", &M, &N, &K);
		
		// 배열 초기화 
		for(int i = 0; i < N; i++){
			for(int j = 0; j < M; j++){
				a[i][j] = 0;
				visited[i][j] = 0;
			}
		}
		
		for(int i = 0; i < K; i++){ // 배추 심어진 위치 
			int b, b2;
			scanf("%d %d", &b2, &b);
			a[b][b2] = 1;
		}
	
		for(int i = 0; i < N; i++){
			for(int j = 0; j < M; j++){
				if(a[i][j] == 1 && visited[i][j] == 0){
					ret++;
					DFS(i, j);
				}
			}
		}
		
		printf("%d", ret);
		printf("\n");
	}

	return 0;
}