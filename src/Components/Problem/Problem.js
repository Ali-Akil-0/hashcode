import React from "react";
import IntroImage from "../../Assets/IntroImage.png";
import contributors from "../../Assets/contributors.png";
import roles from "../../Assets/roles.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiFace } from "react-icons/bi";
import { AiFillCheckSquare } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { AiOutlineWarning } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import input_contributors from "../../Assets/input_contributors.png";
import input_projects from "../../Assets/input_projects.png";
import schedule from "../../Assets/schedule.png";

const Problem = () => {
  return (
    <>
      <div className="app__problem">
        <div className="app__problemTitle">
          <p className="app__problemPar"> Mentorship and Teamwork</p>
          <hr />
        </div>
        <div className="app__problemSubmition">
          <div className="app__problemText">
            <p className="app__problemtext1">Practice Submissions</p>
            <p className="app__problemtext2">
              You have not attempted this problem.
            </p>
          </div>
          <div className="app__problemTable">
            <p className="app__problemTableText">Submissions</p>
            <div className="table__container">
              <table className="app__Table">
                <tr className="app__submission">
                  <td className="app__attempt">Attempt 5</td>
                  <td className="app__level">C - Collaboration</td>
                  <td className="app__WA">WA</td>
                  <td className="app__problemTime">
                    <p>03:08:26</p>
                    <AiFillEye className="app__problemIcon" />
                  </td>
                </tr>
                <tr className="app__submission">
                  <td className="app__attempt">Attempt 4</td>
                  <td className="app__level">C - Collaboration</td>
                  <td className="app__WA">WA</td>
                  <td className="app__problemTime">
                    <p>03:08:26</p>
                    <AiFillEye className="app__problemIcon" />
                  </td>
                </tr>
                <tr className="app__submission">
                  <td className="app__attempt">Attempt 3</td>
                  <td className="app__level">C - Collaboration</td>
                  <td className="app__WA">WA</td>
                  <td className="app__problemTime">
                    <p>03:08:26</p>
                    <AiFillEye className="app__problemIcon" />
                  </td>
                </tr>
                <tr className="app__submission">
                  <td className="app__attempt">Attempt 2</td>
                  <td className="app__level">C - Collaboration</td>
                  <td className="app__WA">WA</td>
                  <td className="app__problemTime">
                    <p>03:08:26</p>
                    <AiFillEye className="app__problemIcon" />
                  </td>
                </tr>
                <tr className="app__submission">
                  <td className="app__attempt">Attempt 1</td>
                  <td className="app__level">C - Collaboration</td>
                  <td className="app__WA">WA</td>
                  <td className="app__problemTime">
                    <p>03:08:26</p>
                    <AiFillEye className="app__problemIcon" />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="app__lastUpdate">
          <p className="app__lastUpdateText">
            Last updated: Mar 24 2022, 23:42
          </p>
        </div>
        <div className="app__ProblemStart">
          <div className="app__ProblemStartIntro">
            <p className="app__ProblemStartPar">Introduction</p>
          </div>
          <div className="app__oroblemStartImage">
            <img
              src={IntroImage}
              alt="IntroImage"
              className="app__IntroImage"
            />
          </div>
          <div className="app__ProblemStartText">
            <p className="app__ProblemStartTextPar">
              Work is so much more fun when we are part of a team! By combining
              our different skills, we can be more creative, efficient and
              productive. And more importantly, when working together we
              share... not only pizzas, but also knowledge. We can learn from
              each other, improve our own skills and gain experience.
            </p>
            <p className="app__ProblemStartTextPar">
              Teamwork is one of the main ingredients of Hash Code, especially
              in this challenge!
            </p>
            <p className="app__ProblemStartTextPar">
              So, are you up for the challenge?
            </p>
          </div>
          <div className="app__problemSummary">
            <div className="app__problemSummaryTitle">
              <p className="app__ProblemStartPar">Summary</p>
            </div>
            <div className="app__problemSummaryPar">
              <p className="app__ProblemStartTextPar">
                You are given a list of contributors, who have already mastered
                various skills, and a list of projects with different skill
                requirements. Contributors can improve their skills by
                completing projects and can mentor each other to work is roles
                in which they couldn't succeed on their own. Your task is to
                assign contributors to project roles that fit their
                qualifications and maximize the score for completed projects.
              </p>
            </div>
          </div>
          <div className="app__problemDescription">
            <div className="app__problemDescriptionTitle">
              <p className="app__ProblemStartPar">Problem description</p>
            </div>
            <div className="app__problemDescriptionContributors">
              <p className="app__ProblemStartPar">Contributors</p>
              <div className="app__problemDescriptionText">
                <p className="app__ProblemStartTextPar">
                  There are N contributors. Each contributor has a name and one
                  or more skills at a specific level (0,1,2,...). Not possessing
                  a skill is equivalent to possessing a skill at level 0.
                </p>
                <div className="app__problemExample">
                  <p className="app__ProblemStartTextPar app__examplePar">
                    For example, three contributors could have the following
                    skills:
                  </p>
                  <ul className="outside">
                    <li>Anna: Python level 3</li>
                    <li>Bob: C++ level 3</li>
                    <li>Maria: HTML level 4, CSS level 6</li>
                  </ul>
                </div>
              </div>
              <div className="app__problemContributorsImage">
                <img
                  src={contributors}
                  alt="ContriutorsImage"
                  className="app__problemContributorsImg"
                />
              </div>
            </div>
            <div className="app__problemDescriptionProjects">
              <p className="app__ProblemStartPar">Projects</p>
              <div className="app__problemDescriptionText">
                <p className="app__ProblemStartTextPar">
                  There are M projects. Each project is described by:
                </p>
                <div className="app__projectsUl">
                  <ul className="outside">
                    <li>its name</li>
                    <li>
                      the duration of the project in days (how long it takes to
                      complete a project once it is started)
                    </li>
                    <li>the score awarded for completing the project</li>
                    <li>
                      the “best before” time in days – if the project last day
                      of work is strictly before the indicated day, it earns the
                      full score. If it’s late (that is, the project is still
                      worked on during or after its "best before day"), it gets
                      one point less for each day it is late, but no less than
                      zero points. See also the example in the "Assignments"
                      section below.
                    </li>
                    <li>
                      a list of roles for contributors working on the project
                    </li>
                  </ul>
                  <p className="app__ProblemStartTextPar">
                    Each project has one or more roles that need to be filled by
                    contributors. Each role requires one skill at a specific
                    level, and can be filled by a single contributor. Each
                    contributor can fill{" "}
                    <span className="app__textBold">at most one role</span> on a
                    single project.
                  </p>
                </div>

                <div className="app__problemExample">
                  <p className="app__ProblemStartTextPar app__examplePar">
                    For example, a project called "WebServer" could have the
                    following roles:
                  </p>
                  <ul className="outside">
                    <li>Role 0 requiring Python level 3</li>
                    <li>Role 1 requiring HTML level 1</li>
                    <li>Role 2 requiring CSS level 5</li>
                  </ul>
                </div>
              </div>
              <div className="app__problemProjectsImage">
                <img
                  src={roles}
                  alt="ContriutorsImage"
                  className="app__problemProjectsImg"
                />
              </div>
            </div>
            <div className="app__problemDescriptionProjects">
              <p className="app__ProblemStartPar">
                {" "}
                Filling roles and mentorship
              </p>
              <div className="app__problemDescriptionText">
                <p className="app__ProblemStartTextPar">
                  A contributor can be assigned to a project for a specific role
                  (at most one role in a single project), if they either:
                </p>
                <div className="app__projectsUl">
                  <ul className="outside">
                    <li>have the skill at the required level or higher; or</li>

                    <li>
                      have the skill at exactly one level below the required
                      level,{" "}
                      <span className="app__problemBold">
                        only if another contributor on the same project
                        (assigned to another role), has this skill at the
                        required level or higher
                      </span>{" "}
                      . In this case, the contributor will be mentored by their
                      colleague :)
                    </li>
                  </ul>
                  <p className="app__ProblemStartTextPar">
                    One contributor can mentor multiple people at once,
                    including for the same skill. A contributor can mentor and
                    be mentored by other contributors at the same time.
                  </p>
                  <p className="app__ProblemStartTextPar">
                    Not possessing a skill is equivalent to possessing a skill
                    at level 0. So a contributor can work on a project and be
                    assigned to a role with requirement C++ level 1 if they
                    don’t know any C++, provided that somebody else on the team{" "}
                    <span className="app__textBold">
                      knows C++ at level 1 or higher.
                    </span>
                  </p>
                </div>

                <div className="app__problemExample">
                  <p className="app__ProblemStartTextPar app__examplePar">
                    For example :
                  </p>
                  <p>
                    For the project WebServer above we could make the following
                    assignments:
                  </p>
                  <p>
                    Role 0 (requires Python level 3) is assigned to Anna (Python
                    level 3).
                  </p>
                  <div className="app__ProjectsSpecialIcon">
                    <AiFillCheckSquare className="check" />
                    <p>Anna has the same level in Python as required.</p>
                  </div>
                  <p>
                    Role 1 (requires HTML level 1) is assigned to Bob (C++ level
                    3).
                  </p>
                  <p className="app__projectsMoveRight">
                    <p>
                      <AiOutlineWarning className="app__warning" />
                      Bob has level 0 in HTML. Since his level is only one below
                      required, he can be assigned, but must be mentored by
                      another contributor who knows HTML at level 1 or above.
                    </p>
                  </p>
                  <p>
                    Role 2 (requires CSS level 5) is assigned to Maria (HTML
                    level 4, CSS level 6)
                  </p>
                  <div className="app__ProjectsSpecialIcon">
                    <AiFillCheckSquare className="check" />
                    <p>
                      Maria has a higher level than the one required for CSS.
                    </p>
                  </div>
                  <div className="app__ProjectsSpecialIcon">
                    <AiFillCheckSquare className="check" />
                    <p>
                      Maria can mentor Bob on HTML since she has HTML level 4.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="app__problemDescriptionAssignments">
              <p className="app__ProblemStartPar">Assignments</p>
              <div className="app__problemDescriptionText">
                <p className="app__ProblemStartTextPar">
                  Each contributor can start working on day 0 and can be working
                  on at most one project at the same time. Once the work on a
                  project starts, its contributors will be working on it the
                  number of days equal to its duration and then become available
                  to work on other projects.
                </p>
                <div className="app__problemExample">
                  <p className="app__ProblemStartTextPar">
                    For example, if the project WebServer has duration of 7 days
                    and starts on day 0, the contributors assigned to it will be
                    working on it during: day 0, day 1, day 2, day 3, day 4, day
                    5 and day 6. On day 7 the project is already completed.
                    Contributors assigned to it can work on another project on
                    day 7.
                  </p>
                </div>
              </div>
            </div>
            <div className="app__problemDescriptionLearning">
              <p className="app__ProblemStartPar">Learning</p>
              <div className="app__problemDescriptionText">
                <p className="app__ProblemStartTextPar">
                  Completing a project is a learning opportunity, especially for
                  the contributors working on the edge of their existing
                  abilities! When each project is completed:
                </p>
                <ul className="outside">
                  <li>
                    contributors working in roles where the required skill level
                    was equal or higher than their current level improve their
                    skill level by one level
                  </li>
                  <li>other contributors keep their skill level</li>
                </ul>
                <p className="app__ProblemStartTextPar">
                  Note that <span className="app__problemBold">mentoring</span>{" "}
                  someone doesn’t increase the level of the skill for the
                  mentor.
                </p>
                <div className="app__problemExample">
                  <p className="app__ProblemStartTextPar app__examplePar">
                    For example:
                  </p>
                  <p>In the assignments above:</p>
                  <ul className="outside">
                    <li>Anna improves Python skill to level 4;</li>
                    <li>Bob improves HTML skill to level 1;</li>
                    <li>
                      Maria improves neither the CSS skill (because Maria’s CSS
                      is already at a level higher than required) nor the HTML
                      skill (because her role required CSS, not HTML).
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="app__problemDescriptionDataset">
              <p className="app__ProblemStartPar">Input data sets</p>
              <div className="app__problemInputData">
                <div className="app__problemInputDataTop">
                  <p className="app__InputDataPar">Input Data</p>
                </div>
                <div className="app__problemInputDataBottom">
                  <a href="../../Files/input_data.zip" download>
                    <div className="app__DataSets">
                      <AiOutlineDownload />
                      <p>Full input (zipped)</p>
                    </div>
                  </a>
                  <a href="../../Files/a_an_example.txt" download>
                    <div className="app__DataSets">
                      <AiOutlineDownload />
                      <p>A - An example </p>
                    </div>
                  </a>
                  <a href="../../Files/b_better_start_small.txt" download>
                    <div className="app__DataSets">
                      <AiOutlineDownload />
                      <p>B - Better start small </p>
                    </div>
                  </a>
                  <a href="../../Files/c_collaboration.txt" download>
                    <div className="app__DataSets">
                      <AiOutlineDownload />
                      <p>C - Collaboration </p>
                    </div>
                  </a>
                  <a href="../../Files/d_dense_schedule.txt" download>
                    <div className="app__DataSets">
                      <AiOutlineDownload />
                      <p>D - Dense schedule </p>
                    </div>
                  </a>
                  <a href="../../Files/e_exceptional_skills.txt" download>
                    <div className="app__DataSets">
                      <AiOutlineDownload />
                      <p>E - Exceptional skills </p>
                    </div>
                  </a>
                  <a href="../../Files/f_find_great_mentors.txt" download>
                    <div className="app__DataSets">
                      <AiOutlineDownload />
                      <p>F - Find great mentors </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="app__problemDescriptionFileFormat">
              <p className="app__ProblemStartPar">File Format</p>
              <div className="app__problemFileFormat">
                <p className="app__ProblemStartTextPar">
                  Each input data set is provided in a plain text file. The file
                  contains only ASCII characters with lines ending with a single
                  '\n' character (also called “UNIX-style” line endings). When
                  multiple strings and numbers are given in one line, they are
                  separated by a single space between each two elements.
                </p>
                <p className="app__ProblemStartTextPar">
                  The first line of the data set contains:
                </p>
                <ul className="outside">
                  <li>
                    an integer C (1 ≤ C≤ 105) – the number of contributors,
                  </li>
                  <li>an integer P (1 ≤ P ≤ 105) – the number of projects.</li>
                </ul>
                <p className="app__ProblemStartTextPar">
                  This is followed by C sections describing individual
                  contributors. Each contributor is described by the following
                  lines:
                </p>
                <ul className="outside">
                  <li>
                    the first line contains:
                    <ul className="secondOutside">
                      <li>
                        the contributor's name (ASCII string of at most 20
                        characters, all of which are lowercase or uppercase
                        English alphabet letters a-z and A-Z, or numbers 0-9),
                      </li>
                      <li>
                        an integer N (1≤ N ≤ 100) - the number of skills of the
                        contributor.
                      </li>
                    </ul>
                  </li>
                  <li>
                    the next N lines describe individual skills of the
                    contributor. Each such line contains:
                    <ul className="secondOutside">
                      <li>
                        the name of the skill (ASCII string of at most 20
                        characters, all of which are lowercase or uppercase
                        English alphabet letters a-z and A-Z, numbers 0-9,
                        dashes '-' or pluses '+'),
                      </li>
                      <li>an integer Li (1≤ Li ≤ 10) - skill level.</li>
                    </ul>
                  </li>
                </ul>
                <p className="app__ProblemStartTextPar">
                  This is followed by P sections describing individual projects.
                  Each project is described by the following lines:
                </p>

                <ul className="outside">
                  <li>
                    the first line contains:
                    <ul className="secondOutside">
                      <li>
                        the name of the project (ASCII string of at most 20
                        characters, all of which are lowercase or uppercase
                        English alphabet letters a-z and A-Z or numbers 0-9),
                      </li>
                      <li>
                        an integer Di (1 ≤Di ≤ 105) – the number of days it
                        takes to complete the project,
                      </li>
                      <li>
                        an integer Si (1 ≤ Si ≤ 105) – the score awarded for
                        project’s completion,
                      </li>
                      <li>
                        an integer Bi (1 ≤ Bi ≤ 105) – the “best before” day for
                        the project,
                      </li>
                      <li>
                        an integer Ri (1 ≤ Ri ≤ 100) – the number of roles in
                        the project.
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="outside">
                  <li>
                    <p className="app__ProblemStartTextPar">
                      the next Ri lines describe the skills in the project:
                    </p>
                    <ul className="secondOutside">
                      <li>
                        a string Xk – the name of the skill (ASCII string of at
                        most 20 characters, all of which are lowercase or
                        uppercase English alphabet letters a-z and A-Z, numbers
                        0-9, dashes '-' or pluses '+'),
                      </li>
                      <li>
                        an integer Lk (1≤Lk≤100) – the required skill level.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="app__problemDescriptionExample">
              <p className="app__ProblemStartPar">Example</p>
              <div className="app__problemExampleContainer">
                <div className="app__ExampleInputFile">
                  <p className="app__ExampleTitle">Input file</p>
                  <p>3 3</p>
                  <p>Anna 1</p>
                  <p>C++ 2</p>
                  <p>Bob 2</p>
                  <p>HTML 5</p>
                  <p>CSS 5</p>
                  <p>Maria 1</p>
                  <p>Python 3</p>
                  <p>Logging 5 10 5 1</p>
                  <p>C++ 3</p>
                  <p>WebServer 7 10 7 2</p>
                  <p>HTML 3</p>
                  <p>C++ 2</p>
                  <p>WebChat 10 20 20 2</p>
                  <p>Python 3</p>
                  <p>HTML 3</p>
                </div>
                <div className="app__ExampleDescription">
                  <p className="app__ExampleTitle">Description</p>
                  <p>3 contributors, 3 projects</p>
                  <p>contributor Anna</p>
                  <p>has C++ skill at level 2</p>
                  <p>contributor Bob</p>
                  <p>has HTML skill at level 5</p>
                  <p>has CSS skill at level 5</p>
                  <p>contributor Maria</p>
                  <p>has skill Python at level 3</p>
                  <p>project Logging needs 1 contributor</p>
                  <p>
                    {" "}
                    that needs to have C++ at level ≥ 3 (2 with mentoring){" "}
                  </p>
                  <p>project WebServer needs 2 contributors</p>
                  <p>
                    first contributor needs to have HTML at level ≥ 3 (2 with
                    mentoring)
                  </p>
                  <p>
                    second contributor needs to have C++ at level ≥ 2 (1 with
                    mentoring)
                  </p>
                  <p>project WebChat needs 2 contributors</p>
                  <p>
                    first contributor needs to have Python at level ≥ 3 (2 with
                    mentoring)
                  </p>
                  <p>
                    second contributor needs to have HTML at level ≥ 3 (2 with
                    mentoring)
                  </p>
                </div>
              </div>
              <img
                src={input_contributors}
                alt="SecondImage"
                className="app__Imagesize"
              />
              <img
                src={input_projects}
                alt="SecondImage"
                className="app__Imagesize"
              />
            </div>

            <div className="app__problemDescriptionExample">
              <p className="app__ProblemStartPar">Submissions</p>
              <p className="app__ProblemStartTextPar">
                The submission file should be a plaintext file containing only
                ASCII characters.
              </p>
            </div>
            <div className="app__problemDescriptionExample">
              <p className="app__ProblemStartPar">File format</p>
              <p className="app__ProblemStartTextPar">
                Your submission describes which projects each contributor is
                going to work on and in which role.
              </p>
              <p className="app__ProblemStartTextPar">
                The first line should contain the integer E (0≤E≤P) – the number
                of executed projects.
              </p>
              <p className="app__ProblemStartTextPar">
                This should be followed by E sections each describing one
                completed project. Each project should be described by two
                lines:
              </p>
              <ul className="putside">
                <li>
                  A single line containing the name of the project (as it
                  appears in the input file). Each project can be mentioned at
                  most once in the submission file.
                </li>
                <li>
                  A single line containing the names of the contributors
                  assigned to each of the project roles, separated by single
                  spaces and listed in the same order as the roles appear in the
                  input file.
                </li>
              </ul>
            </div>
            <div className="app__problemDescriptionExample">
              <p className="app__ProblemStartPar">Example</p>
              <div className="app__problemExampleContainer">
                <div className="app__ExampleInputFile">
                  <p className="app__ExampleTitle">Submission file</p>
                  <p>3 </p>
                  <p>WebServer</p>
                  <p>Bob Anna</p>
                  <p>Logging</p>
                  <p>Anna</p>
                  <p>WebChat</p>
                  <p>Maria Bob</p>
                </div>
                <div className="app__ExampleDescription">
                  <p className="app__ExampleTitle">Description</p>
                  <p>three projects are planned</p>
                  <p>assignments for project WebServer</p>
                  <p>Bob → first role, Anna → second role</p>
                  <p>assignments for project Logging</p>
                  <p>Anna → first role</p>
                  <p>assignments for project WebChat</p>
                  <p>contMaria → first role, Bob → second roleributor Maria</p>
                </div>
              </div>
            </div>
            <div className="app__problemDescriptionExample">
              <p className="app__ProblemStartPar">Scoring</p>
              <p className="app__ProblemStartTextPar">
                Each contributor can only work on one project at a time. If one
                contributor is assigned to multiple projects, the contributor
                will work on them in the same order as they appear in the
                submission file. Each project starts immediately on the first
                day on which all the assigned contributors are available.
              </p>
              <img src={schedule} alt="SomeImage" className="app__Imagesize" />
              <p className="app__ProblemStartTextPar">
                If some project assignment is invalid because the assigned
                contributor does not have the required skill level for the
                project after finishing all previously assigned projects, the
                submission is considered invalid and will not be scored.
              </p>
              <p className="app__ProblemStartTextPar">
                Each project that is completed successfully receives its
                assigned score, as defined in the input file, minus penalty
                points for any delay. If a project is completed after its “best
                before” time, it gets one point less for each day it is late
                (but no less than zero points). Note that even if a project
                scores zero points, the assigned contributors will work on it
                (and may improve their skills thanks to it).
              </p>
              <p className="app__ProblemStartTextPar">
                The total score is the sum of scores for all correctly completed
                projects.
              </p>
              <div className="app__textContainer">
                <p>
                  The <span>example</span> submission results in this timeline:
                </p>
                <p>
                  Day 0 to day 6: Bob and Anna are working on project WebServer
                  (they both have the skills required).
                </p>
                <ul className="outside">
                  <li>
                    As of project completion, Anna levels up in C++: level 2 →
                    3;
                  </li>
                  <li>
                    Bob doesn't level up because his HTML skill (level 5) is of
                    a higher level than required for the project (level 3).
                  </li>
                </ul>
                <p>
                  Project WebServer's last day of work is day 6, so it completes
                  strictly before its "best before" day 7 and receives the full
                  score: 10 points.
                </p>
                <p>
                  Day 7 to 11: Anna is working on the project Logging (she has
                  sufficient C++ skill after completing project WebServer).
                </p>
                <ul className="outside">
                  <li>
                    As of project completion, Anna levels up in C++: level 3 →
                    4;
                  </li>
                </ul>
                <p>
                  Project Logging's last day of work is 11 (so it's completed
                  strictly before day 12), while its "best before" day was 5. It
                  is late by (12−5=) 7 days and receives a score of: (10−7=) 3
                  points.
                </p>
                <p>Day 7 to 16: Maria and Bob are working on project WebChat</p>
                <ul className="outside">
                  <li>
                    As of project completion, Maria levels up in Python: level 3
                    → 4;
                  </li>
                  <li>
                    Bob doesn't level up in HTML because his skills are of a
                    higher level than required for the project (HTML level 5,
                    required 3)
                  </li>
                </ul>
                <p>
                  Project WebChat's last day of work is day 16, while the "best
                  before" day is 20, so it receives the full score: 20 points.
                </p>
                <p>
                  In the end, projects Webserver (10 points), Logging (3 points)
                  and WebChat (20 points) are completed, resulting in a total
                  score of 33 points.
                </p>
              </div>
              <p>
                Note that there are multiple data sets representing separate
                instances of the problem. The final score for your team will be
                the sum of your best scores for the individual data sets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Problem;
