namespace fractals
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        int max = 12,
        iter = 50000;
        private void button1_Click_1(object sender, EventArgs e)
        {
            Graphics g = Graphics.FromHwnd(pictureBox1.Handle);
            g.FillRectangle(Brushes.White, 0, 0, pictureBox1.Width, pictureBox1.Height);
            draw_vihri(g);
        }
        private void draw_vihri(Graphics g)
        {
            double x = 0.0, y = 0.0, p, c0, s0;
            int mx = pictureBox1.Width/2, my = pictureBox1.Height/2, rad;
            double[] c = new double[max], s = new double[max];
            int q;

            Tuple<double, double> A(double x2, double y2)
            {
                double r = 0.75, t;
                t = x2;
                x2 = r * (c0 * x2 + s0 * y2);
                y2 = r * (-s0 * t + c0 * y2);
                return Tuple.Create(x2, y2);
            }
            Tuple<double, double> B(int k, double x1, double y1)
            {
                double r = 0.14;
                x1 = r * x1 + c[k];
                y1 = r * y1 + s[k];
                return Tuple.Create(x1, y1);
            }
            c0 = Math.Cos(-0.05 * Math.PI);
            s0 = Math.Sin(-0.05 * Math.PI);
            rad = (int)Math.Truncate(0.8 * my);
            for (int i = 0; i < max; i++)
            {
                c[i] = Math.Cos(2.0 * i * Math.PI / max);
                s[i] = Math.Sin(2.0 * i * Math.PI / max);
            }
            Random rnd = new Random();
            for (int i = 0; i < iter; i++)
            {
                p = rnd.NextDouble();
                q = rnd.Next(max);
                if (p < 0.25)
                {
                    x = B(q, x, y).Item1;
                    y = B(q, x, y).Item2;
                }
                else
                {
                    x = A(x, y).Item1;
                    y = A(x, y).Item2;
                }
                g.FillRectangle(Brushes.Black, (int)(mx + Math.Round(rad * x)), (int)(my + Math.Round(rad * y)), 1, 1);
            }
        }
    }
}


