#include <bits/stdc++.h>
using namespace std; 

int facto(int n){
	int ret = 1;
	for(int i = 1; i <= n; i++){
		ret *= i;
	}
	return ret;
}

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);

	int ret = facto(5);
	cout << ret << "\n";
	
  return 0;
} 