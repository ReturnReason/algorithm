#include <bits/stdc++.h>
using namespace std;

int main(){
	std::ios::sync_with_stdio(0);
	std::cin.tie(0);
	
	int n;
	cin >> n ;
	
	string result = "";
	
	for(int i = 0; i < n; i++){
		int arr1[26] = {0, };
		int arr2[26] = {0, };
		
		
		string s1, s2;
		cin >> s1 >> s2;
		
		for(auto s : s1){
			arr1[s - 'a']++;
		}
		
		for(auto ss : s2){
			arr2[ss - 'a']++;
		}
		
		for(int k = 0; k < 26; k++){
			if(abs(arr1[k] - arr2[k]) > 0) {
				result = "Impossible";
				break;
			} else{
				result = "Possible";
			}
		}
		
		cout << result << "\n";
		
	}
	
	return 0;
}