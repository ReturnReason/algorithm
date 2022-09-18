#include <bits/stdc++.h>
using namespace std;

int main(){
	
	int N, M;
	cin >> N >> M;
	
	int items[N] = {0, };
	int cnt = 0;
	
	for(int i = 0; i < N; i++){
		cin >> items[i];
	} 
	
	for(int i = 0; i < N - 1; i++){
		for(int j = i + 1; j < N; j++){
			if( M == (items[i] + items[j]) ){
				cnt++;
			}
		}
	}
	
	cout << cnt;
	
	return 0;
}