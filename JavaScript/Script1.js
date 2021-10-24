var count = 0;

document.querySelector(".btnStory").addEventListener("click", function(){
    count ++;
    if(count % 2 != 0){
        document.querySelector(".title h2").textContent = "Our Love Story";
        document.querySelector(".title p").innerHTML = "Theavin Ven: <br><br> I started 10th grade at Hun Sen Svay Antor High School.  At that time, I was in the 10th G grade and I did not know my boyfriend by name or face.  The following year we also studied in the same grade 11th B.  I got to know him a little bit.  After we got to know each other, we started talking to each other, playing chat in a comedy group.  We soon played 12th grade and I became the class monitor.  He always called me (Mom) from time to time.  On the 17th of August, he chatted with me and said strange things like he wanted to love me, but because we busied the Baccll exam, we stopped this story.  On August 21, we also became lovers.  But he does not seem to care much about me, he always teasing me, making me resentful and quarrelsome.  I soon asked him to separate and he tried to reconcile until we got back together.  From then on, we began to understand and love each other very much.<br>";
        document.querySelector("#footer").style.position = "static";
        document.querySelector(".btnStory").textContent = "Close";
    }
    else{
        document.querySelector(".title h2").textContent = "Theavin Ven";
        document.querySelector(".title p").textContent = "I fell in love with her courage, her sincerity, and her flaming self-respect. And it’s these things I’d believe in, even if the whole world indulged in wild suspicions that she wasn’t all she should be. I love her and it is the beginning of everything.";
        document.querySelector("#footer").style.position = "absolute";
        document.querySelector(".btnStory").textContent = "Our Love Story";
    }

});