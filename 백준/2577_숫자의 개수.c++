#include <bits/stdc++.h>
using namespace std;

int main(){
	std::ios::sync_with_stdio(0);
	std::cin.tie(0);
	
	int a, b, c;
	cin >> a >> b >> c;
	
	int mul = a * b * c ;
	int arr[10] ={0, };
	
	string s = to_string(mul);

	for(char c : s){
		arr[c - '0']++;
	}
	
	for(int i = 0; i < 10; i++){
		cout << arr[i] << "\n";
	}
	return 0;
}