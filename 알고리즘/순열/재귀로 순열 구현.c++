#include <bits/stdc++.h>
using namespace std; 

vector<int> v;

void makePermutation(int n, int r, int depth){
	if(r == depth){
		for(int i = 0; i < v.size(); i++){
			cout << v[i];
		}
		cout << "\n";
		return;
	}
	
	for(int i = depth; i < n; i++){
		swap(v[i], v[depth]);
		makePermutation(n, r, depth + 1);
		swap(v[i], v[depth]); // swap했던 것을 다시 복구시킴
	}
}

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);

	for(int i = 1; i <= 3; i++){
		v.push_back(i);
	}
	
	makePermutation(3, 3, 0);
	
  return 0;
} 