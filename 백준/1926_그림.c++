/* DFS로 풀기 */
#include <bits/stdc++.h>
using namespace std;

int visited[504][504];
int board[504][504];
int dy[4] = {-1, 0, 1, 0};
int dx[4] = {0, 1, 0, -1};
int n, m;
int mx;
vector<int> v;
bool isEmpty = true;

int DFS(int y, int x){
	int cnt = 1;
	visited[y][x] = 1;
	
	for(int i = 0; i < 4; i++){
		int ny = y + dy[i];
		int nx = x + dx[i];
		
		if(ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
		if(visited[ny][nx] || board[ny][nx] == 0) continue;
		
		cnt += DFS(ny, nx);
	}
	
	return cnt;
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	cin >> n >> m ;
	for(int i = 0; i < n; i++){
		for(int j = 0; j < m; j++){
			cin >> board[i][j];
		}
	}

	for(int i = 0; i < n; i++){
		for(int j = 0; j < m; j++){
			if(visited[i][j] == 1 || board[i][j] == 0){
				isEmpty = false;
				continue;	
			}
			
			v.push_back(DFS(i, j));
		}
	}
	
	for(int i : v){
		mx = max(i, mx);
	}
	
	if(isEmpty){
		cout << 0 << "\n" << 0 ;
	} else {
		cout << v.size() << "\n" << mx;
	}
	
	return 0;
}


/* BFS 풀이 */
#include <bits/stdc++.h>
using namespace std;

int visited[504][504];
int board[504][504];
int dy[4] = {-1, 0, 1, 0};
int dx[4] = {0, 1, 0, -1};
int n, m;
int mx, cnt;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	cin >> n >> m ;
	for(int i = 0; i < n; i++){
		for(int j = 0; j < m; j++){
			cin >> board[i][j];
		}
	}

	for(int i = 0; i < n; i++){
		for(int j = 0; j < m; j++){
			if(board[i][j] == 0 || visited[i][j] == 1)continue;
			cnt++;
			
			queue<pair<int, int>> q;
			visited[i][j] = 1;
			q.push({i, j});
			int area = 0;
			
			while(q.size()){
				pair<int, int> p = q.front();
				q.pop();
				area++;
				
				for(int i = 0; i < 4; i++){
					int ny = p.first + dy[i];
					int nx = p.second + dx[i];
					
					if(ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
					if(visited[ny][nx] || board[ny][nx] == 0)continue;
					visited[ny][nx] = 1;
					q.push({ny, nx});
				}
			}
			mx = max(mx, area);
		}
	}

	cout << cnt << "\n" << mx;
	
	return 0;
}