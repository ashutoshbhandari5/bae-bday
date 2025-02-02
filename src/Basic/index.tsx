import { Box, FlexCenter, H2, Props } from '@gilbarbara/components';

interface Props {
  breakpoint: string;
}

function Section(props: Props.BoxProps) {
  return <FlexCenter color="#fff" height="115vh" px="md" py="xl" {...props} />;
}

interface GiftSectionProps {
  title: string;
  hoverImg: string;
}

const GiftSection: React.FC<GiftSectionProps> = ({ title, hoverImg }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 style={{ color: 'white' }} className="text-xl font-semibold">
        {title}
      </h2>
      <img
        height={250}
        width={250}
        className="w-96 h-96 bg-cover bg-center border-4 border-white rounded-lg transition-all duration-300 hover:bg-[url('/images/gift-cover.jpg')]"
        src={hoverImg}
      ></img>
    </div>
  );
};

export default function BasicDemo(props: Props) {
  return (
    <>
      <div className="px-12 flex flex-col items-center text-center min-h-screen bg-gradient-to-br from-[#FFD700] via-[#B19CD9] to-[#1E3A5F] text-white">
        {/* Header Section */}
        <div id="header" className="flex flex-col items-center my-10">
          <h1 className="text-3xl font-bold shadow-lg">Today is Aastha's birthday 🎉</h1>
          <img
            id="bff-img"
            src="./mainprof.jpeg"
            alt="Nosheen's Picture"
            width={150}
            height={150}
            className="rounded-full border-4 border-blue-300"
          />
          <h2 style={{ color: 'white' }} className="bg-blue-300 px-4 py-2 rounded-lg my-3 text-lg">
            Growing to be more beautiful🎀
          </h2>
          <h4 style={{ color: 'white' }} className="bg-blue-300 px-4 py-2 rounded-lg text-lg">
            2025 Feb 2
          </h4>
        </div>

        {/* Gift Sections */}
        <div className="mt-8 space-y-10">
          <GiftSection
            title="Here's How Happy I am for you today 🥳"
            hoverImg="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3kwamNrbXBtNXZzeGpvNDV6aHU5a2ZncWYxMXprZjQxdzh4eWFyYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4pTfx2qLszoacZRS/giphy.gif"
          />
          <GiftSection
            title="How people react when you entered the room 😍"
            hoverImg="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTM5cGk2djN4MnVieWk3ZWx5ZTRyaTZiOHMwc2NhZDdwa2R0MXh0MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5GoVLqeAOo6PK/giphy.gif"
          />
          <GiftSection
            title="If I had to describe you with ONE word 👇"
            hoverImg="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWxlOWxoengzeTQzdXVwc3c1MmRleWNmbDBrcjA0MmNxcDFydDB2NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/adtq8F4LHJOFnDxuGS/giphy.gif"
          />
          <GiftSection title="The only person as badass as you 💪" hoverImg="./badass.jpg" />
        </div>
      </div>
      <Box minHeight="90vh">
        <section
          style={{ height: '100vh', background: 'rgb(255, 94, 94)' }}
          className="w-full bg-red-500 flex flex-col items-center justify-center"
        >
          {/* <StarBurst className="star-burst">V2</StarBurst> */}
          <div
            className="rounded-[20px] h-[720px] flex flex-col items-center justify-center text-center bg-cover bg-center"
            style={{ backgroundImage: "url('/mainpic.jpg')" }}
          >
            <h1 style={{ color: 'white', padding: '0 10px' }}>
              Let's go through our journey and see how you make my life special⭐
            </h1>
          </div>
        </section>
        <Section bg="orange" className="demo__projects" justify="start">
          <H2>When i first saw you</H2>
          <div className="text-center px-7 flex flex-col items-center gap-4">
            <p style={{ padding: '10px', fontSize: '18px' }}>
              I know this pic is not clear but it means the world to me, so The first time I saw
              you, it felt like the world paused for just a moment just enough for me to notice that
              something extraordinary have come into my life. You weren’t just another face in the
              crowd(bingo) you were the kind of presence that have huge impact, the kind that makes
              everything else seem quieter, softer, almost invisible. I didn’t know then what I know
              now that meeting you wasn’t just a coincidence. I all part of universie and desitny,
              It was the beginning of something the universe had been writing long before we even
              knew how to read it. Since that day, the sky has felt wider, the nights a little less
              lonely, and time has become my greatest enemy because no matter how much of it I get
              with you, it never feels enough. You don’t have to ask, you don’t have to wonder I
              will always be here, in the spaces between your thoughts, in the quiet moments, in
              every tomorrow. Happy birthday, my love. You are my favorite part of this life.
            </p>
            <img src="./firstSaw.jpg" alt="firstTime" height={150} width={350} />
          </div>
        </Section>
        <Section bg="green" className="demo__how-it-works" justify="start">
          <H2>Our first date</H2>
          <div className="text-center px-7 flex flex-col items-center gap-4">
            <p style={{ padding: '10px', fontSize: '18px' }}>
              Ahh.. what can I say about this, I'm gonna go with the girl a my dream, so beautyful
              classy, pretty and above all her sensitive nature, caring nature and how she take
              organize every small things. It's like a dream for me my soul so like freezing like
              everytime I thought about my first meet and it happened. Like they show in the movie
              and even more romantic than that. I won't say it was perfect I would say it was what
              every guy dreams about and I was in the reality, I was in that place just beside her.
              Just thinking about that makes me wanna go back again and relieve that moment. But yes
              we are far and as I always say it's temporary and being together is the permanent.
              Thank you for being you and always like this more goofy more strong, always keep on
              smiling I will always try to make u smile. Happy birthday my baby I love a lot.
            </p>
            <img src="./firstDate.jpeg" alt="firstTime" height={120} width={350} />
          </div>
        </Section>
        <Section style={{ background: '#bdb2ff' }}>
          <H2>Our office time</H2>
          <div className="text-center px-7 flex flex-col items-center gap-4">
            <p style={{ padding: '10px', fontSize: '18px' }}>
              Guy who was not serious about his daily, I was just about having fun everyday and lost
              in life and a girl came and changed everything now she is not just a girl but a
              fairytale that changed everything into reality. She taught me about living life in
              different perceptive, doing things in right time on specific things. Being rational,
              not to make rush decisions, be decisive and be bold. We spent a great time in office I
              will always be thankful for that cause I met u there we shared a special bond even in
              resticted conditon. I remember the times that u use to send me music I would just
              listen to it write my code and text u everything at the same time. That's the power of
              being with right person. I loved you when we were together I love you when we are in
              distance and I will always love you till the end.
            </p>
            <img src="./officeTime.jpeg" alt="firstTime" height={120} width={350} />
          </div>
        </Section>
        <Section style={{ background: '#9e2a2b' }}>
          <H2>The proposal</H2>
          <div className="text-center px-7 flex flex-col items-center gap-4">
            <p style={{ padding: '10px', fontSize: '18px' }}>
              I was all prepared but I didn't how to do it. Everything happened with flow time gave
              me the idea of writing something for you dressing well, get a beautiful flower and go
              for it. It was so perfect for me theater was there, we were in the museum that u liked
              and the place we didn't care about others. Just u me and the invisible world along
              with my letter, I had a reply of your one of the fav song. I still rememeber looking
              at the mirror and trying to say the lyrics hahah it was funny. But at the end
              everything went well I proposed u and world changed for me I found the meaning of love
              I found you, I found what romance is and I saw a dream coming to a reality just in
              front of my eyes and it not non other than mine itself. I will always love you like I
              first time I proposed you? No! I love you more and even more my darling happy
              birthday! Thank you for making everything so special.
            </p>
            <img src="./proposal.jpeg" alt="firstTime" height={120} width={350} />
          </div>
        </Section>
        <Section style={{ background: '#90be6d' }}>
          <H2>A trip to thailand</H2>
          <div className="text-center px-7 flex flex-col items-center gap-4">
            <p style={{ padding: '10px', fontSize: '18px' }}>
              What is fear? I lost that day when I decided to go on a trip with you to Thailand.
              Nobody in my home knew where I actually went hahah, if it was with friends or anyone I
              could never. We created the best memories of our life holding our hands walking in the
              beach, ride high speed scooter, living and eating everday together and it was like we
              were already in our honeymoon. But above that we talked, we shared things we taught
              each other about daily like, we had a conversation that we never had, we started
              knowing each alot more. It was all worth it. You make things worth it, you have that
              magic you have that charm and aura. It's so smooth you won't see it but feel when
              everyday passes by. I will always remember those days and keep in my heart forever no
              matter how many trips we take I will always remeber it forever. You were born in 1999
              that led me to visit thailand in 2024, happy birthday my motki I love you till moon
              and back.
            </p>
            <video
              src="/thailand.mp4" // Ensure this video is inside the public/video/ directory
              width="350"
              height="200"
              className="rounded-lg shadow-lg"
              autoPlay
              loop
              muted
              controls
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </Section>
        <Section style={{ background: '#52796f' }}>
          <H2>The distance</H2>
          <div className="text-center px-7 flex flex-col items-center gap-4">
            <p style={{ padding: '10px', fontSize: '18px' }}>
              I hate this word, distance. I hate it so bad if I get a power one day to change things
              in dictionary then I will just remove it and make it illegal. No matter how much I
              hate it we lived with it and that made our bond even more stronger than ever. Maybe
              it's the test that universe it taking, it's not always a bad things. We kept being
              with each other no matter how far we are. The best thing about it is being together
              again. The more I thing about seeing you, the more I get exceited and even a code
              stone looks beautiful when I imagine my life living with you. That's the power of
              changing our time from long distance to living togerther and it so beautiful. I want
              to say it's just few more days or months, and we will meet we will have good times
              like before or even more better. Good times are waiting for US and things will start
              making sense on why we had to live apart for some time. I love you in distance and I
              will love you when we are together, Happy Birthday to love of my life!
            </p>
            <img src="./distance.jpeg" alt="firstTime" height={120} width={350} />
          </div>
        </Section>
        <Section style={{ background: '#ff9505' }}>
          <H2>The Future</H2>
          <div className="text-center px-7 flex flex-col items-center gap-4">
            <p style={{ padding: '10px', fontSize: '18px' }}>
              I have already seen the future with you and it will be the most beautiful thing for
              both of US, obviously! Going through the good time, having deep talks, tavelling the
              world together living the tough time where I will make sure that I will always hold
              you hands. You always say that I'm patience with you till when? right? and always and
              forever is my answer. That's not just my behaviour that's my duty and responsibility.
              Now I have seen all sides of you funny, romantic, serious, angry, irritated, loving,
              caring, kind, lost, and much more and do you know why I'm always patience with you
              cause it shows me tell me how I'm so special for you it makes me wanna put more effort
              show more care cause it's me that you share your deep emotion and I should be able to
              handle that. You have trusted me for those emotion and I'm always be so grateful and
              happily care about you. No matter how things goes between us sometime we fight, we
              laugh, we go through silence phases(few hrs can't do more) I will always keep loving
              you, caring about you, obsessive about you, thing about you. I will always cause you
              are my girl and we are forever together. It's your birthday but I received the gift
              from the universe which being with you in your special day. Always keep smiling, I
              hope u do great things in life I will push you no matter what, My support and
              blessings will always be there for you and will keep pushing you for your success. I
              love you so much mero mayalu!
            </p>
            <img src="./future.jpeg" alt="firstTime" height={120} width={350} />
          </div>
        </Section>
        <div style={{ padding: '20px' }} className="flex justify-center items-center">
          <button
            onClick={() => {
              window.open('https://bday-celebration.vercel.app/', '_blank');
            }}
            style={{ height: '100px', cursor: 'ponter', fontSize: '18px' }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Let's celebrate🎉
          </button>
        </div>
      </Box>
    </>
  );
}
