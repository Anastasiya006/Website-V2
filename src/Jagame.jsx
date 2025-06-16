import { ArrowLeft, Calendar, Wrench, Users, Link as LinkIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const functions = [
{
  className: "Arc",
  functions: `Arc(int x, int y, int width, int height, int startAngle, int arcAngle);
Arc(int x, int y, int width, int height, int startAngle, int arcAngle, Boolean fill);
Arc(int x, int y, int width, int height, int startAngle, int arcAngle, Color color);
Arc(int x, int y, int width, int height, int startAngle, int arcAngle, Color color, boolean fill);
int getWidth();
int getHeight();
int getStartAngle();
int getArcAngle();
void setWidth(int width);
void setHeight(int height);
void setStartAngle(int startAngle);
void setArcAngle(int arcAngle);
void draw(Graphics2D g2d);`
},
{
  className: "Button",
  functions: `boolean isPressed();
void setVisible(boolean visible);
void setX(int x);
void setY(int y);
void setWidth(int width);
void setHeight(int height);
int getX();
int getY();
int getWidth();
int getHeight();
void setBeforeColor(Color c);
void setAfterColor(Color c);
void setText(String text);
void setBeforeImage(Image img);
void setAfterImage(Image img);
Color getBeforeColor();
Color getAfterColor();
String getText();
Image getBeforeImage();
Image getAfterImage();
void isDisabled(boolean disabled);
void draw(Graphics2D g2d);`,
},
{
  className: "Color",
  functions: `Color(int r, int g, int b);
Color(int r, int g, int b, int a);
Color(int rgb);
Color(int rgba, boolean hasalpha);
Color(float r, float g, float b);
Color(float r, float g, float b, float a);
Color(ColorSpace cspace, float[] components, float alpha);
Color(String hex);
Color(Color color);`,
},
{
  className: "Display",
  functions: `void init();
void init(String title);
void init(int width, int height);
void init(String title, int width, int height);
void quit();
void setTitle(String title);
void setWindowSize(int width, int height);
void centreFrameInWindow();
void setDisplaySize(int width, int height);
void show();
void hide();
void removeTitleBar();
ArrayList<Button> getButtons();
void wait(int time);
void setBackground(Color color);
void refresh();
void refresh(Color c);
void refresh(int framerate);
void refresh(Color c, int framerate);
void removeButton(Button b);
void addButton(Button b);
Button addButton(int x, int y, int width, int height, Color beforeColor, Color afterColor);
ProgressBar addProgressBar(int x, int y, int width, int height, int orientation, int max, Color fg, Color bg, Color font);
ProgressBar addProgressBar(int x, int y, int width, int height, int orientation, int max);
ProgressBar addProgressBar(ProgressBar bar);`
},
{
  className: "DisplayItem",
  functions: `abstract void draw(Graphics2D g2d);
void translate(int dx, int dy);
void setLocation(int x, int y);
int getX();
int getY();
boolean isFilled();
Color getColor();
void setColor(Color color);
void setFill(boolean fill);
void setX(int x);
void setY(int y);
boolean isFill();`
},
{
  className: "Draw",
  functions: `void rect(int x, int y, int width, int height);
void rect(int x, int y, int width, int height, boolean fill);
void rect(int x, int y, int width, int height, Color color);
void rect(int x, int y, int width, int height, Color color, boolean fill);
void rect(Rectangle rectangle);
void rect(Rectangle rectangle, int x, int y);
void arc(int x, int y, int width, int height, int startAngle, int arcAngle);
void arc(int x, int y, int width, int height, int startAngle, int arcAngle, boolean fill);
void arc(int x, int y, int width, int height, int startAngle, int arcAngle, Color color);
void arc(int x, int y, int width, int height, int startAngle, int arcAngle, Color color, boolean fill);
void arc(Arc arc);
void arc(Arc arc, int x, int y);
void ellipse(int x, int y, int width, int height);
void ellipse(int x, int y, int width, int height, boolean fill);
void ellipse(int x, int y, int width, int height, Color color);
void ellipse(int x, int y, int width, int height, Color color, boolean fill);
void ellipse(Ellipse ellipse);
void ellipse(Ellipse ellipse, int x, int y);
void circle(int x, int y, int radius);
void circle(int x, int y, int radius, Color color);
void circle(int x, int y, int radius, boolean fill);
void circle(int x, int y, int radius, Color color, boolean fill);
void circle(Ellipse circle);
void circle(Ellipse circle, int x, int y);
void line(int x1, int y1, int x2, int y2);
void line(int x1, int y1, int x2, int y2, Color color);
void line(Line line);
void line(Line line, Color color);
void image(String filePath, int x, int y);
void image(Image image);
void image(Image image, int x, int y);
void image(BufferedImage image);
void image(BufferedImage image, int x, int y);
void polygon(int[] x, int[] y);
void polygon(int[] x, int[] y, int nPoints);
void polygon(int[] x, int[] y, boolean fill);
void polygon(int[] x, int[] y, Color color);
void polygon(int[] x, int[] y, int nPoints, boolean fill);
void polygon(int[] x, int[] y, int nPoints, Color color);
void polygon(int[] x, int[] y, Color color, boolean fill);
void polygon(int[] x, int[] y, int nPoints, Color color, boolean fill);
void polygon(Polygon polygon);
void text(String str, int x, int y);
void text(String str, int x, int y, Font font);
void text(String str, int x, int y, Color color);
void text(String str, int x, int y, Font font, Color color);
void text(Text text);
void text(Text text, int x, int y);
void setColor(Color c);`
},
{
  className: "Ellipse",
  functions: `Ellipse(int x, int y, int width, int height);
Ellipse(int x, int y, int width, int height, boolean fill);
Ellipse(int x, int y, int width, int height, Color color);
Ellipse(int x, int y, int width, int height, Color color, boolean fill);
int getWidth();
int getHeight();
void setHeight(int height);
void setWidth(int width);
void draw(Graphics2D g2d);`
},
{
  className: "Font",
  functions: `Font(String name, int style, int size);
Font deriveFont(int style, float size);
static java.awt.Font getDefaultFont();
static String[] getFonts();`
},
{
  className: "Image",
  functions: `Image(BufferedImage image);
Image(BufferedImage image, int x, int y);
Image(String fileName);
Image(String fileName, int x, int y);
Image(Image image, int x, int y);
int getHeight();
int getWidth();
int getRotation();
BufferedImage getImage();
void setImage(BufferedImage image);
void setWidth(int width);
void setHeight(int height);
void cropImage(int width, int height);
void cropImage(int width1, int height1, int width2, int height2);
void setSize(int width, int height);
void setLocation(int x, int y);
void translate(int dx, int dy);
void setX(int x);
void setY(int y);
boolean collide(Image other);
void rotate(int rotation);
void draw(Graphics2D g2d);`
},
{
  className: "Keyboard",
  functions: `void init();
Character getKeyTyped();
boolean isPressed(char c);`
},
{
  className: "Line",
  functions: `Line(int x1, int y1, int x2, int y2);
Line(int x1, int y1, int x2, int y2, Color color);
int getX1();
int getY1();
int getX2();
int getY2();
void setX1(int x1);
void setY1(int y1);
void setX2(int x2);
void setY2(int y2);
void draw(Graphics2D g2d);`
},
{
  className: "Mixer",
  functions: `static Audio addAudio(File file);

class Audio {
  void play(int times);
  void loop();
  void pause();
  void stop();
  void reset();
  void setVolume(double volume);
}`
},
{
  className: "Mouse",
  functions: `void init();
boolean isPressed(int button);
Point getButtonClicked();
Point getMouseLocation();
void setCursor(String filePath);
void setCursor(String filePath, int width, int height);`
},
{
  className: "Polygon",
  functions: `Polygon(int[] x, int[] y);
Polygon(int[] x, int[] y, int points);
Polygon(int[] x, int[] y, boolean fill);
Polygon(int[] x, int[] y, Color color);
Polygon(int[] x, int[] y, int points, Color color);
Polygon(int[] x, int[] y, int points, boolean fill);
Polygon(int[] x, int[] y, Color color, boolean fill);
Polygon(int[] x, int[] y, int points, Color color, boolean fill);
int getPoints();
int[] getXValues();
int[] getYValues();
void setX(int[] x);
void setY(int[] y);
void setPoints(int points);
void addPoint(int x, int y);
void draw(Graphics2D g2d);`
},
{
  className: "ProgressBar",
  functions: `ProgressBar(int x, int y, int width, int height, int orientation, int max);
ProgressBar(int x, int y, int width, int height, int orientation, int max, Color fg, Color bg, Color font);
void setLocation(int x, int y);
void setSize(int width, int height);
void enableText(boolean state);
void setForegroundColor(Color color);
void setBackgroundColor(Color color);
void setFontColor(Color color);
void updateValue(int value);
int getValue();
double getPercentComplete();`
},
{
  className: "Rectangle",
  functions: `Rectangle(int x, int y, int width, int height);
Rectangle(int x, int y, int width, int height, Color color);
Rectangle(int x, int y, int width, int height, boolean fill);
Rectangle(int x, int y, int width, int height, Color color, boolean fill);
void setSize(int width, int height);
void setLocation(int x, int y);
void translate(int dx, int dy);
void setX(int x);
void setY(int y);
int getWidth();
void setWidth(int width);
int getHeight();
void setHeight(int height);
void draw(Graphics2D g2d);
boolean collide(Rectangle other);
boolean contains(Rectangle other);`
},
{
  className: "Text",
  functions: `Text(String str, int x, int y);
Text(String str, int x, int y, Font font);
Text(String str, int x, int y, Color color);
Text(String str, int x, int y, Color color, Font font);
String getString();
void setString(String str);
void setFont(Font font);
Font getFont();
void getFontSize(int size);
int getFontSize();
void draw(Graphics2D g2d);`
},
{
  className: "Time",
  functions: `void start();
long getElapsedTime();
int getFPS();`
}
];

const Jagame = () => {
    const navigate = useNavigate();

    return (
        <div className="h-screen max-w-4xl mx-auto py-20 overflow-y-auto scroll-smooth">
            <button
                onClick={() => navigate(-1)}
                className="mb-2 flex items-center text-sm text-[#e4e4e7] hover:text-white transition"
                >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go back
            </button>

            <h1 className="text-center font-semibold text-3xl text-white pb-8">
                Jagame
            </h1>

            <div className="overflow-hidden rounded-md">
                <img
                src="./src/assets/jagame/jagame.png"
                alt="Byte Budy"
                className="w-full h-130 object-cover"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-md text-gray-400 pt-5">
                <div className="flex items-center gap-3">
                <div className="p-1.5 bg-white/10 rounded-md">
                    <Calendar className="w-4 h-4 text-white" />
                </div>
                <span>January 2024</span>
                </div>

                <div className="flex items-center gap-3">
                <div className="p-1.5 bg-white/10 rounded-md">
                    <Wrench className="w-4 h-4 text-white" />
                </div>
                <span>Java, SWING, AWT</span>
                </div>

                <div className="flex items-center gap-3">
                <div className="p-1.5 bg-white/10 rounded-md">
                    <Users className="w-4 h-4 text-white" />
                </div>
                <span>
                <a
                    href="https://www.linkedin.com/in/xiaowei-vivian-ji/" 
                    className="underline hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Vivian Ji
                </a>
                {", "}
                <a
                    href="https://www.linkedin.com/in/claire-jl-guo/" 
                    className="underline hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Claire Guo
                </a>
                </span>
                </div>

                <div className="flex items-center gap-3">
                <div className="p-1.5 bg-white/10 rounded-md">
                    <LinkIcon className="w-4 h-4 text-white" />
                </div>
                <a
                    href="https://github.com/Anastasiya006/Jagame"
                    className="underline hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                </div>
            </div>

            <h2 className="text-2xl text-[#e4e4e7] pt-15 pb-5">
                Overview
            </h2>
            <p className="text-sm text-gray-400">
                Jagame is a beginner-friendly Java graphics library designed to make game development more accessible. 
                By abstracting complex object-oriented programming (OOP) concepts into simple, intuitive wrappers, 
                Jagame empowers developers to focus on creativity rather than technical intricacies.
            </p>

            <h2 className="text-2xl text-[#e4e4e7] pt-15 pb-5">
                Demo
            </h2>
            <div className="overflow-hidden rounded-md">
                <video
                    src="./src/assets/jagame/jagame.mp4" 
                    controls
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    className="w-full h-auto object-cover"
                />
            </div>

            <h2 className="text-2xl text-[#e4e4e7] pt-15 pb-5">
                Functions
            </h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-700 text-sm text-gray-300 text-left">
                <thead className="bg-[#111111] text-gray-400 uppercase">
                    <tr>
                    <th className="w-1/5 px-4 py-2 border border-gray-700">Class</th>
                    <th className="w-4/5 px-4 py-2 border border-gray-700">Functions</th>
                    </tr>
                </thead>
                <tbody>
                    {functions.map(({ className, functions }, i) => (
                    <tr key={i} className="bg-[#1a1a1a] even:bg-[#121212] align-top">
                        <td className="px-4 py-2 border border-gray-700 font-medium text-white">
                        {className}
                        </td>
                        <td className="px-4 py-2 border border-gray-700">
                        <pre className="whitespace-pre-wrap text-gray-300">
                            <code className="language-java">{functions}</code>
                        </pre>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default Jagame;