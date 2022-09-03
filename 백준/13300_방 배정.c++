#include <bits/stdc++.h>
using namespace std;

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int result = 0;

	int N, K;
	cin >> N ; // 학생수 
	cin >> K; // 한 방 최대 인원 
	
	int arrM [7] = {0, };  //남 
	int arrF [7] = {0, }; // 여 
	
	// 성별 : 여자 0 남자 1 , 학년 1 ~ 6
	for(int i = 0; i < N; i++){
		int G, GR; // 성별, 학년 
		
		
		cin >> G >> GR;
		if(G == 0){ // 여자 
			arrF[GR]++;
		}else if(G == 1){ // 남자 
			arrM[GR]++;
		}
		 
	}
	
	for(int i = 0; i < 7; i++){
	
		if(arrF[i] != 0 && K - arrF[i] >= 0){
			result++;
		}else{
			result += arrF[i] / K;
			if(arrF[i] % K) result++; 
		}
		
	}
	
		for(int i = 0; i < 7; i++){
	
			if(arrM[i] != 0 && K - arrM[i] >= 0){
				result++;
			}else{
				result += arrM[i] / K;
				if(arrM[i] % K) result++; 
			}
		
	}
	
	cout << result;

	return 0;
}