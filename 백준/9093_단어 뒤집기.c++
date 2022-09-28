#include <bits/stdc++.h>
using namespace std;

vector<string> split(string s, string delimiter){
	string token = "";
	int pos;
	vector<string> str;
	while( (pos = s.find(delimiter)) != string::npos ){
		token = s.substr(0, pos);
		reverse(token.begin(), token.end());
		token += " ";
		str.push_back(token);
		s.erase(0, pos + 1);
	}
	
	reverse(s.begin(), s.end());
	str.push_back(s);
	return str;
}

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int n;
	cin >> n;
	
  /* 버퍼 플래시를 사용해야 하는 문제였다. */
	string bufferflush;
	getline(cin, bufferflush);
	
	while(n--){
		
		string s;
		getline(cin, s);
		
		vector<string> s2 = split(s," ");
		
		for(auto i : s2){
			cout << i;
		}
		
		cout << "\n";

	}

	return 0;
}