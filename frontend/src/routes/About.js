export default function About() {
    return (
        <section className="flex flex-col items-center p-6">
            <div className=" max-w-7xl flex flex-col items-center pt-20 pb-20 lg:p-20 gap-5 lg:items-start">
                <h1 className="text-3xl pb-10 font-bold lg:pb-0">About</h1>
                <div className="flex flex-col gap-5">
                    <h2 className="text-xl font-semibold">Me</h2>
                    <p className="text-lg pl-2">Hi, my name is Smári Steinar. I come from the small country of Iceland. I found the urge to study the art of coding after writing my first hello world back in 2018. I fell in love with the frontend for its countless challenges, problem solving, creativity and the endless possibilities to learn new things! I moved to Sweden with my girlfriend in the summer of 2020 and absolutely love it. I currently reside in a small town outside of Malmö. I’m passionate about Skateboarding, snowboarding, biking and I love to hang out with my friends.</p>
                </div>
                <div className="flex flex-col gap-5">
                    <h2 className="text-xl font-semibold">Education</h2>
                    <ul className="pl-2">
                        <li className="pb-3">
                            <h3 className="flex items-center text-xl font-semibold gap-3">Medieinstitutet <span className="flex gap-3"><a href="https://medieinstitutet.se/"><img src="/images/link.svg" height="auto" width="18px" alt="" /></a></span></h3>
                            <p className="text-base font-light">Frontend 2020-2022</p>
                            <p className="text-lg pl-2">At Medieinstitutet i studied all things fronted working with various technologies like React, MongoDB, and ExpressJS</p>
                        </li>
                        <li>
                            <h3 className="flex items-center text-xl font-semibold gap-3">Tækniskólinn <span className="flex gap-3"><a href="https://tskoli.is/"><img src="/images/link.svg" height="auto" width="18px" alt="" /></a></span></h3>
                            <p className="text-base font-light">Programming 2018-2020</p>
                            <p className="text-lg pl-2">At tækniskólinn i studied programming in python, game development with C# web development with javascript and robotics with C++.</p>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <h2 className="text-xl font-semibold">Experience</h2>
                    <ul className="pl-2">
                        <li className="pb-3">
                            <h3 className="flex items-center text-xl font-semibold gap-3">Coolstuff <span className="flex gap-3"><a href="https://coolstuff.se/"><img src="/images/link.svg" height="auto" width="18px" alt="" /></a></span></h3>
                            <p className="text-base font-light">Fullstack internship 2021-2022</p>
                            <p className="text-lg pl-2">For 26 weeks I worked with Coolstuff as a frontend/fullstack dev getting to experience daily life as a professional developer. Working in a agile team developing features and solving problems in a Svelte-kit frontend with a headless CMS that talks GraphQL  and served from GCP</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
} 
