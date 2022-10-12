#include <bits/stdc++.h>

using namespace std;
int stk[1000005];
int pos = 0;

void push(int x){
    stk[pos] = x;
    pos++;
}

int pop(){
    if(pos == 0) return -1;
    return stk[--pos];
}

int size(){
    return pos;
}

int empty(){
    if(pos == 0) return 1;
    return 0;
}

int top(){
    if(pos == 0) return -1;
    return stk[pos - 1];
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    
    int N;
    cin >> N;
    
    for(int i = 0; i < N; i++){
        string s;
        cin >> s;
        
        if(s == "push"){
            int num;
            cin >> num;
            
            push(num);
            
        } else if ( s == "top"){
            cout << top() << "\n";
        } else if ( s == "size" ){
            cout << size() << "\n";
        } else if ( s == "empty"){
            cout << empty() << "\n";
        } else if ( s == "pop"){
            cout << pop() << "\n";
        }
    }

    return 0;
}
