#include <bits/stdc++.h>
using namespace std;

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int N;
	cin >> N;
	
	int cnt[26] = {0, };
	bool pass = false;
	
	for(int i = 0; i<N; i++){
		string s;
		cin >> s;
		cnt[ s[0] - 'a' ]++;
	}  
	
	for(int i = 0; i < 26; i++){
		if(cnt[i] >= 5){
			char c = i + 'a' ;
			cout << c;
			
			pass = true;
		}
	}
	
	if(pass == false) cout << "PREDAJA";
	
	return 0;
}