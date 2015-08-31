# Git and GitHub

## Git

- Git is a version cotrol that records changes to a file or set of files over time so that you can recall specific versions later.
- There are three main stages in Git:

### Working Directory

- We modify files in our working directory.
- Every changes we made its in working directory.

### Staging area

- After editing we need to keep track of every update so we need to create a git repository by **git init**.
- Then this files needs to be added in staging area by **git add**.
- We can see the status of files that are updated by **git status**.
- In staging area we come to know that which files are left to commit.

###.git repository

- Its sub-directory made in the main directory.
- Where all the data that are updated and commited are recorded.
- To commit type **git commit -m "[your commit]"**
- If you want to know what commits are commited then type **git log**. By this we came to know that what changes are made to repository.

##GitHub

- Basically GitHub is a application of git.
- GitHub is a Web-based Git repository hosting service, which offers all of the distributed revision control and source code management functionality of Git 
  as well as adding its own features. 
- We can create our own repository by using github and clone it to our desktop (means local PC) or we can create a repository in our PC and sync it so the 
  repository will be globally viewed.
- If we have made changes to local repository and and need to update the remote repository then we will **push** it to remote.
- If we someone else made changes to repository and we want it updated then we will **pull** it from remote.
- Forking a repository means cloning a repository from another user on github.
- We can have different branches for different purpose but by default we will always be on master branch.
- Also github have some features like we can create a **README** file with markdown language.
- We have contributors who can edit the repository and by commit we come to know what changes are made.
- Overall Github is an advanced and easily operated application of git. 
 