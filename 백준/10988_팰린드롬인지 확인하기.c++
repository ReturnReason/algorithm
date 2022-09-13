#include <bits/stdc++.h>
using namespace std;

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	string s;
	cin >> s;
	
	string copy = s;
	reverse(copy.begin(), copy.end());
	
	bool isPal = false;
	
	for(int i = 0; i < s.size(); i++){

		if(s[i] != copy[i]){
			cout << 0;
			isPal = false;
			break;
		}else{
			isPal = true;
		}
	}
	
	if(isPal) cout << 1;
	
	return 0;
}