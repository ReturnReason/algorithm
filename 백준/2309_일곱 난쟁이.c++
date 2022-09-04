#include <bits/stdc++.h>
using namespace std;

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	vector<int> v; 
	
	for(int i = 0; i < 9; i++){
		int a;
		cin >> a;
		v.push_back(a);
	}
	
	int sum = 0;
	int findIdx[2] = {0, }; // 가짜 2명
	int result[9] = {0,};
	
	for(int i = 0 ; i < 9; i++){
		sum += v[i];
	}
	
	for(int j = 0; j < 9; j++){
		int findSum = sum;
		findSum -= v[j];
		for(int k = j + 1; k < 9; k++){
			if( findSum - v[k] != 100) continue;
			else {
				findIdx[0] = v[j];
				findIdx[1] = v[k];
			} 
		} 
	}
	
	for(int i = 0; i < 9; i++){
		if( v[i] == findIdx[0] || v[i] == findIdx[1]  ) continue;
		else result[i] = v[i];
	}
	
	sort(result, result+9);
	
 for(int i = 0; i < 9; i++){
		if(result[i] != 0) cout << result[i] << "\n";
	}
	
	return 0;
}