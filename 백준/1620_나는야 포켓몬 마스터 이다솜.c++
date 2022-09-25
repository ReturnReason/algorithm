#include <bits/stdc++.h>
using namespace std;

int N, M, pm_idx;
map<int, string> mp;
map<string, int> mp2;
string find_pm, pm;
string key;

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);

	cin >> N >> M;
	for(int i = 0; i < N; i++){
		cin >> pm;
		mp[i] = pm;
		mp2[pm] = i;
	}
	
	for(int i = 0; i < M; i++){
		cin >> find_pm;
		
		if( atoi(find_pm.c_str()) == 0 ){ // 문자로 들어옴. 
		// 숫자로 변경해서 출력 
			cout << mp2[find_pm] + 1<< "\n";
			
		} else { // 숫자로 들어옴, 문자로 변경해서 출력 
			int idx = atoi(find_pm.c_str());
			cout << mp[idx - 1]  << "\n"; 
		}
	}
	
	return 0;
}