#include <bits/stdc++.h>
using namespace std;

int main (){
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int n;
	cin >> n;
	
	for(int i = 1; i <= n; i++){
		for(int j = n - i + 1 ; j > 0; j--){
			cout << "*";
		}
		
		cout << "\n";
	}
	
	return 0;
}