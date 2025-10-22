// Committee page is where all the committee members are displayed with their roles and a short bio. Could add <Image> component for profile pics later

import Layout from '../components/Layout';
import CommitteeMember from '../components/committeeMember';
export default function Committee() {
  return (
    <Layout title="MASS Cubed—Committee" description="Monash Advanced Science & Science Scholars Society">
      <main>
        <header className="bottom-horizontal">
          <h1>Committee of 2026</h1>
        </header>
        <div>
          <CommitteeMember
              name="Isabella Ferguson (she/her)"
              role="President"
              bio="Hello! I'm Isabella, and I'm so exited to be your 2026 President!! I'm in the Advanced 
               Research degree, and majoring in chemistry and earth science. I'm super passionate about all
               sorts of nerdy science especially science communication, and love getting hands on and doing
               things with real word applications. You can usually find me floating around commo between classes,
               or with a million research papers open on my laptop. I love getting to know people, and am always
               up for a chat (or anything else that helps procrastinate assignments) so come say hi!!"
               imageUrl="/assets/images/people/isabella.jpg"
          />
          <CommitteeMember
              name="Leith Murray (he/him)"
              role="Vice President"
              bio="Howdy! I'm Leith and I have the delight of being your Vice President for 2026. 
                I'm doing my Honours in Environmental Chemistry in the Advanced Research degree. 
                Always free for a chat or to answer any questions, I can often be found taking samples in 
                your nearest mangrove, marsh, or bog."
            imageUrl="/assets/images/people/leith.jpg"
          />
          <CommitteeMember
              name="Zach Peeters (he/him)"
              role="Secretary"
              bio="Hi, I'm Zach, your Secretary! I'm a GC student, hopefully majoring in ecology, 
            but I also love languages and learning about all the crazy discoveries the other scientific disciplines 
            are making. If you need to find me, I live in the common room. Drop by commo on a Wednesday morning 
            and I would love to share a cup of tea (or coffee) with you!"
          />
          <CommitteeMember
              name="Nick Missen (he/him)"
              role="Treasurer"
              bio="Hi! I'm Nick, and I'll be your Treasurer in 2026!! I'm a research student 
            studying Astrophysics, Physics, and Maths, so you'll probably find me in commo crying over the 
            work I don't understand. Please drop in and say hi . . . for my sake."
            imageUrl="/assets/images/people/nick.jpg"
          />
          <CommitteeMember
              name="Ivy Lai (she/her)"
              role="Assistant Treasurer"
              bio="Hey there, I'm Ivy, the second ever Assistant Treasurer! I'm an Advanced Research student, 
              majoring in pure maths and astrophysics. I play netball and study Japanese in my spare 
              time, and am always happy to have a chat! :)"
              
          />
          <CommitteeMember
              name="Kayla Quinn (she/her)"
              role="Education Officer"
              bio=""
          />
          <CommitteeMember
              name="Jacinta Tait (she/her)"
              role="Marketing Officer"
              bio="Hi! I'm Jacinta and I'm the Marketing Officer for 2026. I'm an advanced research student planning to 
              do a major in ecology and a second major in physiology. If you couldn't tell from my choice of majors,
              I love all things biology. When I'm not doing school work, I love to read, crochet or play video games. 
              If you see me around, feel free to ask me any questions or just have a chat with me."
              imageUrl="/assets/images/people/jacinta.jpg"
          />
          <CommitteeMember
              name="Niamh Toohey (she/her)"
              role="Communication Officer"
              bio="Hello! I'm Niamh and I'm very excited to be your Communications Officer for 2026! 
              I'm studying advanced research, majoring in Climate and Atmospheric Science, with a minor in Physics and Maths. 
              I love to knit and all things Antarctica and I'm always happy to chat!"
              imageUrl="/assets/images/people/niamh.jpg"
          />
                    <CommitteeMember
              name="TBD"
              role="Events Coordinator"
              bio=""
          />
          <CommitteeMember
              name="TBD"
              role="First Year Research Representative"
              bio=""
          />
          <CommitteeMember
              name="TBD"
              role="First Year Global Challenges Representative"
              bio=""
          />
          <CommitteeMember
              name="TBD"
              role="First Year Data Science Representative"
              bio=""
          />
        </div>
      </main>
    </Layout>
  );
}