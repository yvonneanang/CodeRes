/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { FileCode2 } from "lucide-react";

const features = [
  {
    title: "Simple Upload",
    description:
      "Upload a picture of your figure of interest",
    //styles: "bg-primary text-primary-content",
    //styles: "bg-base-100 text-base-content",
    styles: "bg-gradient-to-r from-violet-700 to-pink-700",
    demo: (
      <div className="overflow-hidden h-full flex items-stretch">
        <div className="w-full translate-x-12 bg-base-200 rounded-t-box h-full p-6">
          <p className="font-medium uppercase tracking-wide text-base-content/60 text-sm mb-3">
            Upload a screenshot
          </p>
          <div className="relative textarea py-4 h-full mr-12 bg-base-200 group-hover:bg-base-100 group-hover:border-base-content/10 text-base-content">
            <div className="absolute left-4 top-4 group-hover:hidden flex items-center ">
              <span>Figure:</span>
              <span className="w-[2px] h-6 bg-primary animate-pulse"></span>
            </div>
            {/* <div className="opacity-0 group-hover:opacity-100 duration-500">
              Figure: should be visible only on certain pages.
            </div> */}
            <div className="opacity-0 group-hover:opacity-100 duration-1000">
              <Image 
                    className="rounded-md"
                    width={600}
                    height={350}
                    //fill
                    alt="CodeRes Logo"
                    src="/paper-fig-1-crop.png"
              />
            </div>
            {/* <div className="opacity-0 group-hover:opacity-100 duration-1000 flex items-center gap-0.5">
              <span>Terms & privacy pages don&apos;t need them</span>
              <span className="w-[2px] h-6 bg-primary animate-pulse"></span>
            </div> */}
            <button className="btn shadow-lg btn-primary absolute right-4 bottom-6 opacity-0 group-hover:opacity-100 duration-1000">
              Upload
            </button>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Multi-packed Code: One Figure, Multiple Plots",
    description: "Generate code for multiple plots from a single figure",
    styles: "md:col-span-2 bg-base-300 text-base-content",
    //styles: "md:col-span-2 text-black bg-gradient-to-r from-purple-100 to-pink-100",
    demo: (
      //<div className="px-6 max-w-[600px] flex flex-col gap-4 overflow-hidden">
      <div className="px-6 flex flex-col gap-4 overflow-hidden">
        {[
          {
            //source: "/code-blocks/code-block-1.png",
            code: "# Plot the heatmap\n  " + 
                  "data = np.random.rand(27, 30)\n  "  +
                  "fig,ax=plt.subplots(figsize=(10,10))\n  " +
                  "sns.heatmap(data, annot=Flase, cmap='viridis', ax=ax)",
            transition: "group-hover:-mt-36 group-hover:md:-mt-28 duration-500",
          },
          {
            //source:"/code-blocks/code-block-2.png",
            code: "# Create the dendogram\n  " +
                  "Z = np.random.rand(27, 27)" + 
                  "fig, ax = plt.subplots(figsize=(5,5))\n  " +  
                  "dendogram=dendogram(Z, orientation='right', labels=labels)",
          },
          
        ].map((feature, i) => (
          <div
            className={`p-4 bg-base-100 text-base-content rounded-box flex justify-between mb-2 gap-4 ${feature?.transition}`}
            key={i}
          >
            <div className="mockup-code text-sm">
              <pre>
                <code>{feature.code}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Get code in multiple languages",
    description: "Python, Matlab, R, Java, C++",
    styles: "md:col-span-2 bg-base-100 text-base-content",
    demo: (
      <div className="flex left-0 w-full h-full pt-0 lg:pt-8 overflow-hidden -mt-4">
        <div className="-rotate-[8deg] flex min-w-max overflow-x-visible h-full lg:pt-4">
          {[
            {
              language:"Python",
              
              code_one:"fig, ax = plt.subplots(figsize=(5,5))\n   " + "sns.scatter(x, y, s-10, c= np.random.rand(1000), alpha=0.5)",
              code_two:"fig, ax = plt.subplots(figsize=(10, 6))\n  " + "sns.heatmap(data, ax=ax, cmap='viridis', annot=False",
              //css: "-ml-1 rotate-[6deg] w-72 h-72 z-30 bg-base-200 text-base-content rounded-2xl group-hover:-ml-64 group-hover:opacity-0 group-hover:scale-75 transition-all duration-500 p-4",
              css: "-ml-1 rotate-[6deg] w-80 h-80 z-30 bg-gradient-to-b from-blue-500 via-violet-500 to-pink-500 text-base-content rounded-2xl group-hover:-ml-64 group-hover:opacity-0 group-hover:scale-75 transition-all duration-500 p-3.5 border-2 border-violet-950",
            },
            {
              language:"Matlab",
              code_one:"figure('Position', [100, 100, 500, 500]);\n   " + "scatter(x, y, 10, rand(1000, 1), 'filled', 'MarkerFaceAlpha', 0.5)",
              code_two:"figure('Position', [100, 100, 1000, 600]);\n  " + "ax = axes;\n  " + "heatmap(ax, data, 'Colormap', viridis, 'CellLabelColor', 'none')",
              css: "rotate-[6deg] bg-gradient-to-b from-blue-500 via-violet-500 to-pink-500 text-base-content w-80 h-80 -mr-20 -ml-20 z-20 rounded-xl p-3.5 border-2 border-violet-950 shadow-md",
            },
            {
              language:"R",
              code_one:"library(ggplot2)\n   " + "fig <- ggplot()+\n    " + 
                        "geom_point(aes(x = x, y = y), size = 10, alpha = 0.5, color = rgb(runif(1000), runif(1000), runif(1000)))",
              code_two:"data_melted <- melt(data)\n   " + "ggplot(data_melted, aes(Var1, Var2, fill=value)) + \n  " + 
                        "geom_tile() + scale_fill_viridis_c() + theme_minimal()\n " + 
                        "theme(axis.text.x = element_text(angle=45, hjust=1))",

              css: "rotate-[6deg] bg-gradient-to-b from-blue-500 via-violet-500 to-pink-500 text-base-content z-10 w-80 h-80 rounded-xl p-3.5 border-2 border-violet-950",
            },
            {
              language: "Java",
              code_one:"g.setColor(new Color(rand.nextFloat(), rand.nextFloat(), rand.nextFloat(), 0.5f));\n  " + "g.fillOval(x,y, 10, 10);\n   ",
              code_two:"JFrame frame = new JFrame('Heatmap'); \n  " + "frame.setSize(800, 600);\n   " + "XYDataset dataset = createDataset();\n  "+ 
                        "JFreeChart chart = ChartFactory.createXYLineChart('Heatmap', 'X-Axis', 'Y-Axis', dataset, PlotOrientation.VERTICAL, false, true, false)",
              css: "rotate-[6deg] bg-gradient-to-b from-blue-500 via-violet-500 to-pink-500 text-base-content w-80 h-80 -ml-20 rounded-xl p-3.5 border-2 border-violet-950",
            },
            {
              language: "C++",
              code_one:"",
              code_two:"",
              css: "rotate-[6deg] bg-gradient-to-b from-blue-500 via-violet-500 to-pink-500 text-base-content w-80 h-80 -ml-10 -z-10 rounded-xl p-4 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 border-2 border-violet-950",
            },
          ].map((feature, i) => (
            <div className={feature.css} key={i}>
              {/* <div className="font-medium uppercase tracking-wide text-base-content/60 text-sm mb-3 flex justify-end"> */}
              <div className="font-medium uppercase tracking-wide text-white text-sm mb-3 flex justify-end">
                <FileCode2 className="mr-2"/>
                {feature.language}
              </div>
              <div className="space-y-2">
                <div className="mockup-code text-sm pl-0.5">
                  <pre>
                      <code> {feature.code_one} </code>
                  </pre>
                </div>

                <div className="mockup-code text-sm">
                  <pre>
                      <code> {feature.code_two} </code>
                  </pre>
                </div>

                <div className="mockup-code text-sm">
                  <pre>
                      <code> {feature.code_two} </code>
                    </pre>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Succint accompanying explanations",
    description: "Obtain succint explanations for each piece of code related to a particular plot",
    styles: "bg-neutral text-neutral-content",
    demo: (
      <div className="text-neutral-content px-6 space-y-4">
        {[
          {
            id: 1,
            text: "Can we have a feature to add a custom domain to IndiePage?",
            userImg:
              "https://pbs.twimg.com/profile_images/1514863683574599681/9k7PqDTA_400x400.jpg",
            userName: "Marc Lou",
            createdAt: "2024-09-01T00:00:00Z",
          },
          {
            id: 2,
            text: "I'd definitelly pay for that 🤩",
            userImg:
              "https://pbs.twimg.com/profile_images/1778434561556320256/knBJT1OR_400x400.jpg",
            userName: "Dan K.",
            createdAt: "2024-09-02T00:00:00Z",
            transition:
              "opacity-0 group-hover:opacity-100 duration-500 translate-x-1/4 group-hover:translate-x-0",
          },
        ]?.map((reply) => (
          <div
            key={reply.id}
            className={`px-6 py-4 bg-neutral-content text-neutral rounded-box ${reply?.transition}`}
          >
            <div className="mb-2 whitespace-pre-wrap">{reply.text}</div>
            <div className="text-neutral/80 flex items-center gap-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="avatar">
                  <div className="w-7 rounded-full">
                    <img src={reply.userImg} alt={reply.userName} />
                  </div>
                </div>
                <div className=""> {reply.userName} </div>
              </div>
              •
              <div>
                {new Date(reply.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

export const FeaturesGrid = () => {
  return (
    <section className="flex justify-center items-center w-full bg-base-200/50 text-base-content py-20 lg:py-32">
      <div className="flex flex-col max-w-[82rem] gap-16 md:gap-20 px-4">
        <h2 className="max-w-3xl font-black text-4xl md:text-6xl tracking-[-0.01em] ">
          Generate code with a  <br /> {" "}
          {/* <span className="underline decoration-dashed underline-offset-8 decoration-slate-300"> */}
          <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-transparent bg-clip-text">  
            Gemini-powered {" "}
          </span>
           click
        </h2>
        <div className="flex flex-col w-full h-fit gap-4 lg:gap-10 text-text-default max-w-[82rem]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`${feature.styles} rounded-3xl flex flex-col gap-6 w-full h-[22rem] lg:h-[25rem] pt-6 overflow-hidden group`}
              >
                <div className="px-6 space-y-2">
                  <h3 className="font-bold text-xl lg:text-3xl tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="opacity-80">{feature.description}</p>
                </div>
                {feature.demo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


