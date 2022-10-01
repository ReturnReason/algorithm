#include <bits/stdc++.h>
using namespace std; 

int N, ret;
int arr[104][104];
int visited[104][104];
int dy[] = {-1, 0, 1, 0};
int dx[] = {0, 1, 0, -1};

void DFS(int y, int x, int h){
	visited[y][x] = 1;
	
	for(int i = 0; i < 4; i++){
		int ny = y + dy[i];
		int nx = x + dx[i];
		
		if(ny < 0 || nx < 0 || ny >= N || nx >= N) continue;
		if(visited[ny][nx] == 0 && arr[ny][nx] > h){
			DFS(ny, nx, h);
		}
	}
	return;	
}

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	cin >> N;
	for(int i = 0; i < N; i++){
		for(int j = 0; j < N; j++){
			cin >> arr[i][j];
		}
	}
	
	for(int h = 1; h < 101; h++){
		int cnt = 0;
		
		for(int i = 0 ; i < 104; i++){
			for(int j = 0 ; j < 104; j++){
				visited[i][j] = 0;
			}
		}
		
		for(int i = 0; i < N; i++){
			for(int j = 0; j < N; j++){
				// 방문 안했을 경우 
				if(visited[i][j] == 0 && arr[i][j] > h){
					DFS(i, j, h);
					cnt++;
				}
			}
		}
		
		ret = max(ret, cnt);
	}
	
	if(ret == 0){
		cout << 1;
	} else {
		cout << ret;
	}

  return 0;    
}

/* 

  아무 지역도 안 잠기는 경우가 최소이므로
  결과값은 1부터 시작해야 한다. 
  처음에 이 부분을 고려하지 않아서 틀렸던 문제!!

*/