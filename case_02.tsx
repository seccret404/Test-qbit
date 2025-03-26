type IComment = {
     commentId: number;
     commentContent: string; //interface
     replies?: IComment[];
   };
   
   //daata
   const comments: IComment[] = [
     {
       commentId: 1,
       commentContent: 'Hai',
       replies: [
         {
           commentId: 11,
           commentContent: 'Hai juga',
           replies: [
             { commentId: 111, commentContent: 'Haai juga hai jugaa' },
             { commentId: 112, commentContent: 'Haai juga hai jugaa' }
           ]
         },
         {
           commentId: 12,
           commentContent: 'Hai juga',
           replies: [{ commentId: 121, commentContent: 'Haai juga hai jugaa' }]
         }
       ]
     },
     { commentId: 2, commentContent: 'Halooo' }
   ];
   
   //fungsi rekursif  menghitung total komentar
   const countComments = (comments: IComment[]): number => {
     return comments.reduce((total, comment) => {
       return total + 1 + (comment.replies ? countComments(comment.replies) : 0);
     }, 0);
   };
   
   console.log("Total komentar:", countComments(comments));  
   