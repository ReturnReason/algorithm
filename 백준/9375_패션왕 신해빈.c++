#include <bits/stdc++.h>
using namespace std;

int tc, n;
long long ret = 1;
string input, input2;
map<string, int> _map;

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);

	cin >> tc;
	
	for(int i = 0; i < tc; i++){
		
		cin >> n;
		
		for(int j = 0; j < n; j++){
			cin >> input >> input2;
			_map[input2]++;
		}
		
		for(auto k : _map){
			ret *= k.second + 1;
		}

		cout <<  ret - 1 << "\n";
		_map.clear();
		ret = 1;
	}	
	
	return 0;
}