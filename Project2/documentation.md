# Project Name: The Poisoned Apple Comic Story 

## Project Description 

Our project consists of a comic story about a young boy in a forest. After brainstorming various ideas, we came up with a concept that we wanted to create, a story with meaning and influence about critical thinking and making informed choices for a specific target audience. In this case, children. We initially thought about making a comic based on popular novels or movies we were familiar with from childhood. Still, we decided to create something that relates to us and make it original. Early in creating our comic, we wanted to ensure that we created a story that is aesthetically pleasing on the web, readily understandable, amusing to the reader, and conveys a message or moral. To do so, we concentrated on implementing the comic principles by McCloud to establish a successful story for our audience. As a group, we devised a fiction story involving a young boy, an owl, and a poisoned apple. 

Despite the simplicity of the narrative we created, it has a profound moral message. The story makes the reader reflect on specific actions. It sends the message that sometimes the easy choice isn't always the best and that it's always a good idea to weigh other people's opinions and give a situation some thought before making a choice. While having this idea in mind and ultimately developing it, we tried to follow McCloud's rules, which stress the value of simplicity yet convey an impactful statement. This was the experience we strived to create for our audience. 

##  User Experience

To create an immersive experience for our webcomic, we wanted to ensure that the user had complete control over their reading experience. Therefore, we decided to incorporate a horizontal scrolling feature, allowing users to move through the different panels of the comic at their own pace. This scrolling feature not only provides a unique way to read the comic but also helps to guide the reader's eye from one panel to the next, creating a natural flow to the story.

To further enhance the user experience, we also incorporated interactive elements into the webcomic. For example, we added a background soundtrack that the user could mute or unmute using a control button. This not only adds to the overall atmosphere of the webcomic but also gives the user an additional element of control over their experience. We also included a "scroll to start" button at the end of the comic, allowing users to navigate back to the beginning and reread the story quickly.

We added a progress bar at the top of the page to provide users with a sense of time orientation while reading the webcomic. This bar fills up as the user scrolls through the panels, giving them an idea of how much of the comic they have read and how much is left to go. This not only helps users to pace themselves but also creates a feeling of accomplishment as they make their way through the story.

In addition to these features, we also paid close attention to the overall design of the webpage, ensuring that it was user-friendly and easy to navigate. We used a minimalist design approach with a clean layout and simple color scheme, allowing the focus to remain on the story and the comic art.

Overall, our goal was to create an immersive and enjoyable reading experience for users, while incorporating various elements of UX to enhance the overall experience. By combining interactive elements, horizontal scrolling, and a user-friendly design, we believe that we have created a webcomic that is both engaging and easy to use.

## Concept Implementation

To execute our idea we began by brainstorming, planning, and then splitting tasks. We wanted to ensure that the concept and story of our work are clearly represented through the website. As well as use interactivity and aesthetics to keep the viewer engaged in the story.  

After deciding on the format of our website (horizontal scroll) as a group we looked at current examples of how to do that. After gaining an understanding I began setting up the outline of the website by adding a page for each panel as well as an introduction and ending page. This process specifically focused on coding mostly in HTML and CSS as well as a bit of Javascript. To create the pages, I used a div tag to divide each panel into a page. By using a reference we were able to create the horizontal scroll with a line on top of the HTML page that tracks where you are on the website and how much you have left for the story. After, I proceeded to add the images for the story on each page in the background according to the sequence of the story. On top of the background images, I added the text of the story also according to the sequence of the story. I proceeded to edit the home page by adding the story title and on the last page I added “The End” to tell the user they have reached the end of the story. I also added our names in the footer of that page. In my contribution, I believe the most challenging part was positioning. Positioning the text was definitely a hassle because I didn't want the text to cover any significant parts of the background image. As the background image takes up the whole window space there were only small areas I could display the text. However, I managed to find suitable places that are good enough for the reader and don't intervene with the visibility of the images. Contributing together as a group had its ups and downs, I believe we work better together but the only limitation was that we weren't always able to work on the code at the same time. At times we had to wait for one person to finish their part in the code in order to then add in ours. 

## Layout Choice
Initially, we created a fully functioning vertical layout that included all the desired elements we had planned. However, we quickly realized that the layout did not align with our personal preferences and did not provide the user experience we were looking for.

We discussed various layout options and ultimately decided on a horizontal layout because of our love for reading comics and the feel of flipping through pages. This decision presented a new challenge for us as we had no prior experience with coding a horizontal layout. It was a daunting task, but we were determined to create a website that aligned with our vision.

To achieve our goal, we had to scrap the entire website and start from scratch. It was a challenging decision, but we knew it was necessary to create a website that we could be proud of. We put in a lot of hard work and effort to learn the necessary skills to code a horizontal layout from scratch.

## Enhancing User Experience through Webcomic Design

In this project we tried to create an immersive experience to our story. The webpage provides a user-friendly experience that allows users to read and enjoy the comic script at their own pace while incorporating various elements of UX to enhance the overall experience. For the web interactivity we decided to add background sound which can be controlled by using a button and scroll to the start button at the end of the comic to read it again. We also thought that adding a progress bar at the top of the page would give the user a sense of time orientation. I had some major challenges with the autoplay of the background sound because according to many browsers policy, autoplay is not allowed on a page load unless the user is able to control the play/pause and volume and speed. So we came up with this idea of clicking on the page when we first load the page. The below JavaScript reflects this logic:


```
// background music buttons interaction
const bgMusic = document.getElementById('bg-music');
const muteBtn = document.getElementById('mute-btn');

function toggleMute() {
  if (bgMusic.muted) {
    bgMusic.muted = false;
    muteBtn.innerHTML = 'Mute';
  } else {
    bgMusic.muted = true;
    muteBtn.innerHTML = 'Unmute';
  }
}'

<!-- background music with a mute and unmute button -->
'<button id="mute-btn" onclick="toggleMute()">Mute</button>
<audio id="bg-music">
  <source src="background.mp3">
</audio>

<script>
  window.addEventListener('click', () => {
    document.getElementById("bg-music").play();
  });
</script>
```


Scott McCloud, in his book "Understanding Comics," outlines several principles of comic art, which can also be applied to webcomics. Flow refers to the way the eye moves across the page, and how the reader is guided from panel to panel. In our webcomics, flow can be achieved through the use of horizontal scrolling and various interactive elements. We also tried to pay attention to the framing which refers to the way that panels are arranged on the page, and how they are used to focus the reader's attention. In webcomics, framing can be used to create a sense of depth or perspective, or to highlight important moments in the story. In our webcomic the main character is in a fixed position throughout the different panels so that we can feel the story from his unique perspective.

## Using External Libraries for Dynamic Web Animations and Functionality
As we embarked on our journey to create a visually appealing and engaging webpage, we recognized the importance of incorporating dynamic elements such as smooth scrolling, background music controls, and captivating text animations. However, as novice developers, we encountered some challenges in implementing these features. Nevertheless, we were determined to overcome these obstacles and elevate the user experience on our webpage.

To achieve our desired functionality, we leveraged external libraries such as the GreenSock Animation Platform (GSAP) plugin and the Animate on Scroll (AOS) library. With GSAP's ScrollToPlugin, we were able to seamlessly integrate a smooth scrolling functionality into our webpage. The plugin allowed us to add an event listener to our "Scroll to Start" button, which triggered a function to animate the horizontal scroll of the container element to the left position of the first page using the to() method of GSAP. The duration of the animation was set to 1 second, with an easing function of "power3.out" to ensure a smooth and natural movement. By using the scrollTo property, we could specify a target scroll position that would allow users to navigate through our webpage with ease.

However, we faced some challenges in aligning our Javascript code with our HTML code. Since Javascript uses class and ID selectors to select HTML elements, it was crucial to ensure that our HTML code had the correct class or ID attributes. By doing so, we could effectively select the desired elements and incorporate our desired functionality.

To further enhance our webpage's visual appeal, we incorporated AOS, which provided us with a wide range of options for customizing our text animations. We were able to apply these animations to child elements as they came into view as the user scrolled down the page. Each child element had data attributes that defined the type of animation, the duration, delay, and easing function. With AOS, we could experiment with different fade effects, such as fading to the right, left, down, and up, to create a truly captivating experience for our users.

In summary, our use of external libraries such as GSAP and AOS allowed us to overcome our limitations as novice developers and create a visually appealing and dynamic webpage with smooth scrolling functionality, background music controls, and captivating text animations. By embracing new tools and techniques, we were able to elevate the user experience on our webpage and leave a lasting impression on our users.

## Visuals

To generate the images we used the Discord AI bot Midjourney. The use of AI-generated images can be a helpful tool in generating large volumes of images quickly. However, it's important to understand that these images are not perfect and require a lot of time and effort to make them usable for your needs. When you would think of AI generated images you would easily dismiss it and assume tis a breeze. However, the couldn’t be father from the truth.  Unlike a human artist who can remember what they've created and make adjustments to maintain consistency, AI models don't have memory in the same way. This means that each image can be vastly different from the last, making it challenging to create a cohesive set of images that fit together. The reason why is also the reason why AI can’t possibly replace. Human nowadays. Creatively there was no cohesiveness nor continuity in the photos generated. This can be the downfall of these programs there is no memory int these AI models so it took a lot of time and effort to generate and even more effort to make it ready for usage. The images constantly generated a new face, new clothes background and everything was so different. This led to *heavy* manipulation on photoshop. We used content mesh tool and even added some elements that we created using Illustrator. To do that we had to add shadows, brush the edges blend it in and feather and many more things. This aspect although we overlooked it proved to be one of the hardest things.

Overall, while AI-generated images can be a useful tool, it's important to recognize their limitations and the amount of work required to make them usable. In many cases, it may be more efficient to work with human artists who can create a consistent and cohesive set of images tailored to your specific needs. If we were to do this on a more professional scale with a heavier load of images we would likely choose to create or own or hire an artist. This is because we all have very limited adobe photoshop and illustrator skills so it was so hard to creatively push ourselves to make the image look how we want to with our limited skills.


## Reflection/Evaluation

Our group successfully achieved all the goals we had set out to accomplish in our project, and we are proud of the final product we delivered. We began by creating a detailed wireframe that outlined all the features and functionalities we wanted to include in our website. Throughout the development process, we remained committed to our vision, and we worked tirelessly to ensure that every feature was implemented flawlessly.

One of the most significant achievements of our team was our ability to think outside the box and come up with innovative solutions to problems we encountered along the way. For example, we decided to integrate a chatbot feature that would provide users with personalized recommendations based on their search queries. This feature required us to do extensive research and testing, but we persevered and were able to deliver a feature that added significant value to our website.

In addition to meeting our initial goals, we also implemented new ideas and design solutions that elevated the website's functionality and user experience. We wanted our website to be modern and easy to use, so we spent a lot of time perfecting the user interface and user experience design. As a result, we were able to deliver a website that not only met our goals but also exceeded our expectations.

Overall, we are incredibly proud of what we accomplished as a group. We worked hard, collaborated well, and remained focused on our vision throughout the project. Our ability to deliver a high-quality product that met all our goals and objectives is a testament to our skills and dedication as a team.

## References:
https://github.com/michalsnik/aos

https://github.com/greensock/GSAP

https://www.youtube.com/watch?v=MAn39BeEcfo&t=311s
