import { type ReactNode, useState } from "react";
import { ChevronDown, ChevronUp, Expand, FileVolume } from "lucide-react";
import Pie from "../components/progress";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import type { User } from "@/lib/userSlice";
import { Link } from "react-router";

interface Lesson {
  name: string;
  description: string;
  image: string;
  progress: number;
  last_date: Date;
}

export async function clientLoader() {}

function LessonCard(props: { lesson?: Lesson; children?: ReactNode }) {
  return (
    <div className="bg-background rounded-2xl pt-3">
      <div className="mx-4 flex items-center gap-4 pb-3">
        <img src={props.lesson?.image} className="h-full max-w-20"></img>
        <div className="flex flex-col text-left">
          <h1 className="text-accent text-xl">{props.lesson?.name}</h1>
          <p className="text-secondary-foreground text-base">
            {props.lesson?.description}
          </p>
        </div>
        <div className="flex h-full flex-col gap-2 lg:ml-30">
          <Expand fill="var(--text-secondary-foreground)" />
          <FileVolume />
        </div>
      </div>
      {props.children}
    </div>
  );
}

function Accordion(props: { children?: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="text-secondary-foreground flex flex-col">
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div>{props.children}</div>
      </div>

      <div className="bg-muted/50 border-muted flex items-center justify-end rounded-b-2xl border-t-1 px-4 py-0.5">
        <button
          aria-label="View lesson overview"
          className="flex items-center gap-1.5 text-sm"
          onClick={() => setOpen(!open)}
        >
          View {open ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
    </div>
  );
}

export default function Dashboard({ className = "" }: { className?: string }) {
  const [sortType, setSortType] = useState<"recent" | "date" | "progress">(
    "progress",
  );
  const user = useSelector((state: RootState) => state.user.user) as User;

  /* TODO: grab from api instead of hardcoding*/
  const lessons: Lesson[] = [
    {
      name: "Going to College",
      description:
        "This lesson is a guide to navigating the path to higher education. You'll learn about different tupes of colleges, degrees, so you can decide what's right for you.",
      image: "/grad_cap.png",
      progress: 100,
      last_date: new Date("Jan 30, 2023"),
    },
    {
      name: "Introduction to Soft Skills",
      description:
        "This lesson focuses on understanding and enhancing soft skills-personal attributes that enable individuals to interact effectively and harmoniously with others.",
      image: "/tools.png",
      progress: 30,
      last_date: new Date("Nov 26, 2024"),
    },
    {
      name: "Personal Finance Management",
      description:
        "In this lesson learn the basics of managing money, including the differencebetween debit and credit, strategies to avoid debt, and creating a monthly budget.",
      image: "/money.png",
      progress: 0,
      last_date: new Date("Feb 2, 2025"),
    },
  ];

  //const [lessons, setLessons] = useState<Lesson[] | null>(null);
  /*
  useEffect(() => {
    fetch('http://localhost:3000/lessons')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLessons(data);
      });
  }, []);
*/

  return (
    <>
      <div className="mx-4 my-12 lg:mx-[15vw]">
        <div className="text-secondary-foreground mb-4 flex w-full gap-3 text-sm">
          <p>Sort By:</p>
          <button
            aria-label="Sort by recent"
            className="bg-secondary outline-foreground-border rounded-md px-8 text-center outline-1 drop-shadow-xs"
            onClick={() => {
              setSortType("recent");
            }}
          >
            Recent
          </button>
          <button
            aria-label="Sort by date"
            className="bg-secondary outline-foreground-border rounded-md px-8 text-center outline-1 drop-shadow-xs"
            onClick={() => {
              setSortType("date");
            }}
          >
            Date
          </button>
          <button
            aria-label="Sort by progress"
            className="bg-secondary outline-foreground-border rounded-md px-8 text-center outline-1 drop-shadow-xs"
            onClick={() => {
              setSortType("progress");
            }}
          >
            Progress
          </button>
        </div>
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:gap-0">
          <div className="col-span-8">
            <div className="bg-foreground outline-foreground-border flex flex-col gap-2 rounded-3xl p-4 outline-1 lg:mr-4">
              <h1 className="text-secondary-foreground text-left text-3xl font-medium">
                Lessons
              </h1>

              {!lessons ? (
                <p>Loading...</p>
              ) : (
                [...lessons]
                  .sort((a, b) => {
                    switch (sortType) {
                      case "recent":
                        return (
                          +a.last_date.toUTCString - +b.last_date.toUTCString
                        );
                      case "date":
                        return (
                          +b.last_date.toUTCString - +a.last_date.toUTCString
                        );
                      case "progress":
                        return a.progress - b.progress;
                    }
                  })
                  .map((e) => (
                    <LessonCard lesson={e}>
                      <Accordion>
                        This has been left undesigned as the API we need to
                        build out will dictate how each lesson will be passed
                        into the frontend. For the sake of showing off the
                        footer's positioning, have some standard text: <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion>
                    </LessonCard>
                  ))
              )}
            </div>
          </div>
          <div className="col-span-4 flex flex-col">
            <div className="bg-foreground outline-foreground-border flex h-fit w-full items-center gap-3 rounded-3xl p-4 outline-1">
              <div
                className={`flex h-16 w-16 items-center justify-center overflow-hidden rounded-full ${
                  user.profile_picture
                    ? ""
                    : "border-secondary-foreground border-1 border-solid"
                }`}
              >
                {user.profile_picture ? (
                  <img src={user.profile_picture} className="object-cover" />
                ) : (
                  <p className="text-secondary-foreground text-2xl font-light">
                    {(user.display_name || "   ").substring(0, 2).toUpperCase()}
                  </p>
                )}
              </div>
              <div className="text-left">
                <h3 className="text-secondary-foreground text-lg">
                  {user.display_name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {user?.username}
                </p>
              </div>
              <Link className="text-secondary-foreground ml-auto" to="/account">
                Edit
              </Link>
            </div>
            <div className="text-secondary-foreground">
              <p className="text-left font-medium">Your Progress</p>
              <div className="bg-foreground outline-foreground-border col-start-2 col-end-2 rounded-3xl p-4 outline-1">
                {!lessons ? (
                  <p>Loading...</p>
                ) : (
                  lessons.map((e) => (
                    <div className="flex items-center">
                      <Pie size={120} percentage={e.progress} color="" />
                      <h2 className="text-base">{e.name}</h2>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
