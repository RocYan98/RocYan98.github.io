---
date: 2023-08-03
tag:
  - PAT
  - Algorithm
category: PAT
#cover: http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/y2zb7z.png
order: 1
---

# PAT 数据结构

## [PAT甲级题目整理](https://github.com/RocYan98/PAT)

## 链表

- 做题时一般使用静态链表

```cpp
struct Node {
    int data;
    Node* next;
};

//静态链表
struct Node {
    int data;
    int next;
} node[MAX];

Node* create(int arr[]) {
    Node* p, head, pre;
    head = new Node;
    head->next = NULL;
    pre = head;
    for (int i = 0; i < n; ++i) {
        p = new Node;
        p->data = arr[i];
        p->next = NULL;
        pre->next = p;
        pre = p;
    }
    return head;
}
```



## 二叉树

- 做题时一般只有完全二叉树会使用静态实现

```cpp
struct Node {
    int data;
    Node* lchild;
    NOde* rchild;
};

//二叉树的静态实现
struct Node {
    int data;
    int lchild, rchild;
} node[MAX];

void insert(Node* &root, int data) {
    if (root == NULL) {
        root = new Node;
        root->data = data;
        root->lchild = NULL;
        root->rchild = NULL;
        return;
    }
    
    if (data < root->data) {
        insert(root->lchild, data);
    } else {
        insert(root->rchild, data);
    }
}
```



### 二叉树的遍历

```cpp
void preorder(Node* root) {
    printf("%d", root->data);
    preorder(root->lchild);
    preorder(root->rchild);
}

void inorder(Node* root) {
    inorder(root->lchild);
    printf("%d", root->data);
    inorder(root->rchild);
}

void postorder(Node* root) {
    postorder(root->lchild);
    postorder(root->rchild);
    printf("%d", root->data);
}

void levelorder(Node* root) {
    queue<Node*> q;
    q.push(root);
    while (q.size()) {
        Node* top = q.front();
        q.pop();
        if (top->lchild != NULL) q.push(top->lchild);
        if (top->rchild != NULL) q.push(top->rchild);
        printf("%d", top->data);
    }
} 
```



### 平衡二叉树

```cpp
struct Node {
	int data, height;
    Node* lchild;
    Node* rchild;
}

int get_height(Node* root) {
    if (root == NULL) return 0;
    return max(get_height(root->lchild), ge_height(root->rchild)) + 1;
}

int get_balance_factor(Node* root) {
    return get_height(root->lchild) - get_height(root->rchild);
}

void L(Node* &root) {
	Node* temp = root->rchild;
    root->rchild = temp->lchild;
    temp->lchild = root;
    root = temp;
}

void R(Node* &root) {
    Node* temp = root->lchild;
    root->lchild = temp->rchild;
    temp->rchild = root;
    root = temp;
}

void insert(Node* &root, int data) {
    if (root == NULL) {
        root = new Node;
        root->data = data;
        root->lchild = NULL;
        root->rchild = NULL;
        return;
    }
    if (data < root->data) insert(root->lchild, data);
    else insert(root->rchild, data);
    int bal_fac = get_balance_factor(root);
    if (bal_fac == 2) {
        if (get_balance_factor(root->lchild) == 1) {
            R(root);    
        } else {
            L(root->lchild);
            R(root);
        }
    } else if (bal_fac == -2) {
        if (get_balance_factor(root->rchild) == -1) {
            L(root);
        } else {
            R(root->rchild);
            L(root);
        }
    }
}
```



### 哈夫曼树

```cpp
priority_queue<int, vector<int>, greater<int> > q;
for (int i = 0; i < n; ++i) {
    int temp;
    scanf("%d", &temp);
    q.push(temp);
}

while (q.size() > 1) {
    int x = q.front();
    q.pop();
    int y = q.front();
    q.pop();
    q.push(x + y);
}
```



## 并查集

```cpp
int father[MAX];

int find_father(int x) {
    int a = x;
    while (x != father[x]) {
        x = father[x];
    }
    while (a != father[a]) {
        int tmp = a;
        a = father[a];
        father[tmp] = x;
    }
    return x;
}

void merge(int a, int b) {
    int fa = find_father(a);
    int fb = find_father(b);
    if (fa != fb) {
        father[fa] = fb;
    }
}
```



## 图

### DFS遍历图

```cpp
//邻接矩阵版
const int INF = 0x3f3f3f3f;
int adj[MAX][MAX];
int vis[MAX] = {0};

void DFS(int u) {
    vis[u] = 1;
    for (int v = 0; v < MAX; ++v) {
        if (adj[u][v] != INF && vis[v] == 0) DFS(v);
    }
}

int main() {
    memset(adj, 0x3f, sizeof adj);
    for (int u = 0; u < MAX; ++u) {
        if (vis[u] == 0) DFS(u);
    }
    return 0;
}
```

```cpp
//邻接表版
int vis[MAX];
int h[N], e[N], ne[N], idx;//h[i]表示i号链表的头结点，e[i]表示结点i的值，ne[i]表示节点i的next指针是多少，idx表示存储当前已经用到了哪个点

void add(int a, int b) {
    e[idx] = b, ne[idx] = h[a], h[a] = idx++;
}

void DFS(int u) {
    vis[u] = 1;
	for (int i = h[u]; ~i; i = ne[i]) {
        int v = e[i];
        if (vis[v] == 0) DFS(v);
    }
}

int main() {
	memset(h, -1, sizeof h);
    for (int u = 0; u < MAX; ++u) {
        if (vis[u] == 0) DFS(u);
    }
    return 0;
}
```



### BFS遍历图

```cpp
//邻接矩阵版
const int INF = 0x3f3f3f3f;
int adj[MAX][MAX];
int inq[MAX] = {0};

void BFS(int u) {
    int queue<int> q;
    q.push(u);
    inq[u] = 1;
    while (q.size()) {
        int top = q.front();
        q.pop();
        for (int i = 0; i < MAX; ++i) {
            if (adj[top][i] != INF && inq[i] == 0) {
                q.push(i);
                inq[i] = 1;
            }
        }
    }
}

int main() {
    memset(adj, 0x3f, sizeof adj);
    for (int u = 0; u < MAX; ++u) {
        if (inq[u] == 0) BFS(u);
    }
    return 0;
}
```

```cpp
//邻接表版
int inq[MAX];
int h[N], e[N], ne[N], idx;//h[i]表示i号链表的头结点，e[i]表示结点i的值，ne[i]表示节点i的next指针是多少，idx表示存储当前已经用到了哪个点

void add(int a, int b) {
    e[idx] = b;
    ne[idx] = h[a];
    h[a] = idx++;
}

void BFS(int u) {	
    int queue<int> q;
    q.push(u);
    inq[u] = 1;
    while (q.size()) {
        int top = q.front();
        q.pop();
        for (int i = h[top]; ~i; i = ne[i]) {
            int v = e[i];
            if (inq[v] == 0) {
                q.push(v);
                inq[v] = 1;
            }
        }
    }
}

int main() {
    memset(h, -1, sizeof h);
    for (int u = 0; u < MAX; ++u) {
        if (inq[u] == 0) BFS(u);
    }
    return 0;
}
```



### Trie（字典树）

```cpp
void insert(char *str) {
    int p = 0;
    for (int i = 0; str[i]; ++i) {
        int u = str[i] - 'a';
        if (son[p][u] == 0) son[p][u] = ++idx; //son[a][u] = b 表示第a个结点到第b个结点之间的字母是u
        p = son[p][u];
    }
    cnt[p]++; //第p个结点的结尾标记，表示有以这个结点结束的字符串
}

int query(char *str) {
    int p = 0;
    for (int i = 0; str[i]; ++i) {
        int u = str[i] - 'a';
        if (son[p][u] == 0) return 0;
        p = son[p][u];
    }
    return cnt[p];
}
```

