#include <bits/stdc++.h>
using namespace std;

int main(){
	std::ios::sync_with_stdio(0);
	std::cin.tie(0);
	
	string a, b;
	cin >> a >> b;
	
	int arr1[26] = {0, };
	int arr2[26] = {0, };
	int cnt = 0;
	
	for(char c : a){
		arr1[c -'a']++;
	}
	
	for(char c : b){
		arr2[c -'a']++;
	}
	
	for(int i = 0; i < 26; i++){
		cnt += abs(arr1[i] - arr2[i]);
	}
	
	cout << cnt << "\n";
	
	return 0;
}