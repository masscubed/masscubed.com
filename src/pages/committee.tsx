// Committee page is where all the committee members are displayed with their roles and a short bio. Could add <Image> component for profile pics later

import Layout from '../components/Layout';
import CommitteeMember from '../components/committeeMember';
export default function Committee() {
  return (
    <Layout title="MASS Cubed—Committee" description="Monash Advanced Science & Science Scholars Society">
      <main>
        <header className="bottom-horizontal">
          <h1>Committee of 2024-2025</h1>
        </header>
        <div>
          <CommitteeMember
              name="Caitlyn Smith (she/her)"
              role="President"
              bio="Hello!!
            My name is Caitlyn (she/her) and I am super excited to be your 2025 President!!
            I am in the Advanced Research degree and majoring in maths and physics. I enjoy board
            games, abstract celebrity heads and talking to people in commo.
            I always love meeting new people and getting to know them, so come say hi!!"
          />
          <CommitteeMember
              name="Leith Murray (he/him)"
              role="Vice President"
              bio="Howdy! I'm Leith and I have the delight of being your Vice President for 2025. 
            I'm doing a double major of Earth Science and Chemistry in the Advanced Research degree. 
            Always free for a chat or to answer any questions, I can often be found taking samples in 
            your nearest mangrove, marsh, or bog."
          />
          <CommitteeMember
              name="Siena Izzard (she/her)"
              role="Secretary"
              bio="Hi! I'm Siena— your 2025 Secretary. I'm a physics and maths double major in the Advanced 
            Research degree, so most days you can find me in the common room starting at a whiteboard full 
            of integrals. Feel free to come have a chat about uni, MASS3 or my small army of houseplants."
          />
          <CommitteeMember
              name="Dhairya Hans (she/her)"
              role="Treasurer"
              bio="Hi! My name is Dhairya, and I am the super excited to be the treasurer 
            for 2024/2025. I am absolutely honoured and delighted to be chosen for this role! I'm a 
            second year research student majoring in chemistry, and minoring in maths. I'd love to get 
            to know all of you better, so if you see me, don't hesitate to come say hi!"
          />
          <CommitteeMember
              name="Zach Peeters (he/him)"
              role="Assistant Treasurer"
              bio="Hi, I'm Zach, your first assistant treasurer! I'm a GC student, hopefully majoring in ecology, 
            but I also love languages and learning about all the crazy discoveries the other scientific disciplines 
            are making. If you need to find me, I live in the common room. Drop by commo on a Wednesday morning 
            and I would love to share a cup of tea (or coffee) with you!"
          />
          <CommitteeMember
              name="Jack Travers (he/they)"
              role="Education Officer"
              bio="Hey, I'm Jack, and I'm super excited to be your Education Officer for 2025! 
            I'm an Advanced Research student, extended-majoring in maths and hoping to go into meteorology 
            (although my MonPlan is ever changing). I'd always love to hear from you so reach out at any time"
          />
          <CommitteeMember
              name="Elaine Marques (she/her)"
              role="Events Coordinator"
              bio="Hi, I'm Elaine and I'm privileged to be your Events Coordinator for 2025! 
            I'm enrolled in the Advanced Research degree and am completing an extended major in 
            chemistry. I'm probably one of the biggest chemistry enthusiasts in the science 
            precinct and I'm frequently around the advanced science common room. I'm always 
            free for a chat and please feel free to reach out to me if you have any queries or 
            suggestions regarding events too!"
          />
          <CommitteeMember
              name="Michael Cotugno (he/him)"
              role="Marketing Officer"
              bio="I'm Michael, unofficial face of the 2023 MASS Cubed Instagram and proud new editor
             for Mass Cubed's promotion and outreach. Next year, you can expect bad jokes, electronic music, 
             and environmental policy to all work their way into my role"
          />
          <CommitteeMember
              name="Isabella Ferguson (she/her)"
              role="Communication Officer"
              bio="Hi!! I'm Isabella, and I'm really excited to be the communications officer for 2025! I'm studying 
            advanced research, and majoring in chemistry and earth science. I love getting to know people, and am always searching for new things to put in the newsletter or up in commo,
            so come have a chat!!"
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