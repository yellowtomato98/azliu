---
title: Finding Friends
subtitle: spherical trig
date: '2024-01-08'
time: 30m
toc: false
published: true
---




I wrote the last question in the [2023 NAC](https://usaaao.files.wordpress.com/2023/09/second_exam_2023-1.pdf), called *Finding Friends*. The premise of the question is that there is an astronomer named Andrew trying to chase a star $$\chi$$, and the task is to compute some interesting metrics related to whether or not he will ever be able to catch $$\chi$$.

The original problem was very long, and the final version that ended up being in the exam was condensed by a few parts in order to not make the exam too long or impossible. I figure there is no better place to dump the entire question than my blog, so here is the entire question and solution that I originally submitted. 

<a id="question-finding-friends"></a>

<a id="question:-finding-friends-[(solution)](#solution-finding-friends)"></a>

## Question: Finding Friends [(solution)](#solution-finding-friends)

In the future, Earth is perfectly spherical and completely covered with water. Sailor Andrew is on a boat initially positioned at the equator in such that a way that $\gamma$, the vernal equinox, is directly overhead. He observes a star $\chi$ with right ascension and declination $(\alpha, \delta)=(15^{\circ}, 10^{\circ})$. He wants to chase $\chi$, and he needs your help.

**You may assume the following numerical values for each constant:**
- $R_{\oplus}$ is Earth's radius (same as the current day value).
- $\omega = 2\pi/(24\text{ hrs})$ is Earth's angular frequency.
- His boat is very fast; its maximum speed is $\vert v\vert = \omega R_{\oplus}/4$.
- The vernal equinox $\gamma$ has celestial coordinates $(0^{\circ}, 0^{\circ})$.
- $(\alpha, \delta) = (15^{\circ}, 10^{\circ})$.

<a id="section-1"></a>

### Section 1

<a id="ques-a"></a>

<a id="(a):-2-points-[(sol)](#sol-a)"></a>

#### (a): 2 points [(sol)](#sol-a)

Calculate the angular distance between $\gamma$ and $\chi$. Express your answer in degrees.

In his starting position, $\chi$ is somewhere above his horizon. As he sails to different parts of the planet and time passes, $\chi$ moves around his night sky. He wants sail his boat in order to get $\chi$ as close to his zenith as possible. To make sure he is as efficient as possible, he wants to make a few calculations first.

<a id="ques-b"></a>

<a id="(b):-2-points-[(sol)](#sol-b)"></a>

#### (b): 2 points [(sol)](#sol-b)

If he does not move his boat from his starting position, calculate the minimum zenith distance that $\chi$ reaches. Express your answer in degrees. 

Now, he considers what would happen if he sails straight north at all times.

<a id="ques-c"></a>

<a id="(c):-3-points-[(sol)](#sol-c)"></a>

#### (c): 3 points [(sol)](#sol-c)

Starting from his intial position when $\gamma$ is overhead, he directs his boat straight north and starts sailing with speed $\vert v\vert$. Does $\chi$ first cross his north-south meridian or east-west meridian? Briefly explain why this is the case.

<a id="ques-d"></a>

<a id="(d):-3-points-[(sol)](#sol-d)"></a>

#### (d): 3 points [(sol)](#sol-d)

Calculate the zenith distance of $\chi$ when it first crosses his north-south meridian. Express your answer in degrees.

<a id="ques-e"></a>

<a id="(e):-15-points-[(sol)](#sol-e)"></a>

#### (e): 15 points [(sol)](#sol-e)

Calculate the zenith distance of $\chi$ when it first crosses his east-west meridian. Express your answer in degrees.

Let $X$ be the point in his trajectory (in the celestial sphere) at which $\chi$ reaches its minimum zenith distance, and $N$ be the north celestial pole. Note that $X$ is a point in the celestial sphere, and not Earth.

<a id="ques-f"></a>

<a id="(f):-6-points-[(sol)](#sol-f)"></a>

#### (f): 6 points [(sol)](#sol-f)

Argue that $\angle N\gamma X+\angle \chi XN \approx \pi/2$, where both angles are spherical angles. Then, calculate $\angle \chi XN$. Express your answer in degrees.

Note: For this part only, you may assume that the declination of $X$ is small, hence the approximation. 

<a id="ques-g"></a>

<a id="(g):-15-points-[(sol)](#sol-g)"></a>

#### (g): 15 points [(sol)](#sol-g)

Calculate the minimum zenith distance that $\chi$ reaches. Express your answer in degrees. 
    
For this problem:
- You may no longer assume that the declination of $X$ is small. However, you may use the value of $\angle{\chi XN}$ derived in part (f).
- You are given that the right ascension of $X$ is within $(\alpha\pm 2^{\circ})$. 
- **His trajectory in the celestial sphere is not necessarily a great circle**. Be careful when computing angles and lengths!
     
<a id="section-2"></a>

### Section 2

His next consideration is to see what happens if he steers his ship directly towards $\chi$ at all times. As before, assume he starts from his initial position with $\gamma$ overhead, and his boat always moves with speed $\vert v\vert$. If $\chi$ passes below his horizon, he stops his ship. 

As before, assume he starts from his initial position when $\gamma$ is overhead. Provide a brief argument for why this steering strategy will take him at least one day (i.e., $2\pi/\omega$) until he can get $\chi$ directly overhead using this method.

Relative to the celestial sphere, he has two velocities: one due to the rotation of earth, $v_r$, and one due to his boat's velocity, $v$. Let $\zeta$ be the counterclockwise angle from $v_{r}$ to $v$. Let $\theta$ be the counterclockwise angle from $v_{r}$ to $v_t$, where $v_t$ is his net velocity in the celestial sphere.

Now we will attempt to characterize how the zenith distance changes over his trajectory. At any particular point in his path, let $\phi$ be his latitude. 

<a id="ques-h"></a>

<a id="(h):-2-points-[(sol)](#sol-h)"></a>

#### (h): 2 points [(sol)](#sol-h)

Find an expression for $\tan \theta$ in terms of $\zeta$, $v$, $\omega$, $R_{\oplus}$, and $\phi$. Some of these constants have known numerical values, but you do not have to substitute them in.

(Hint: Consider the components of $v_t$. Your final expression should involve all the listed constants.) 

<a id="ques-i"></a>

<a id="(i):-7-points-[(sol)](#sol-i)"></a>

#### (i): 7 points [(sol)](#sol-i)

In his current trajectory, prove that a small change in the zenith distance of $\chi$, $\Delta z$, corresponds to a horizontal displacement in the celestial sphere by an angle of
$$
\Delta \lambda = \frac{\vert \Delta z\vert \cos{\theta}}{\cos{(\zeta - \theta)}\cos \phi}.
$$
Note that $\Delta z$ and $\Delta \lambda$ are small angular changes. 

<a id="ques-j"></a>

<a id="(j):-6-points-[(sol)](#sol-j)"></a>

#### (j): 6 points [(sol)](#sol-j)

As before, assume that he starts with $\gamma$ overhead and steers his boat towards $\chi$ at all times. At some point before $\chi$ dips below the horizon for the first time, it reaches a minimum zenith distance. At this moment in time, compute $\cos{\phi}\sin{\theta}$. Your answer should be numerical.
    
(Hint: you may find your expression from part (h) useful.)

<a id="section-3"></a>

### Section 3

He is not satisfied with these results. He feels there should be an optimal way to get $\chi$ directly overhead, as fast as possible. Help him figure out the fastest way to get $\chi$ to his zenith. 

<a id="ques-k"></a>

<a id="(k):-2-points-[(sol)](#sol-k)"></a>

#### (k): 2 points [(sol)](#sol-k)

Given that he is allowed to maneuver his boat however he wants throughout the duration of his journey, and that he starts from his initial position with $\gamma$ overhead, show that $\chi$ cannot be at his zenith the first time it culminates, i.e., crosses his north-south meridian. 

<a id="ques-l"></a>

<a id="(l):-7-points-[(sol)](#sol-l)"></a>

#### (l): 7 points [(sol)](#sol-l)
Let $t$ be the fastest time he can get $\chi$ to his zenith. Compute the quantity $(t-\text{20 hrs})$, in seconds.

<a id="solution-finding-friends"></a>

<a id="solution:-finding-friends-[(question)](#question-finding-friends)"></a>

## Solution: Finding Friends [(question)](#question-finding-friends)

<a id="section-1"></a>

### Section 1

<a id="sol-a"></a>

<a id="(a)-[(ques)](#ques-a)"></a>

#### (a) [(ques)](#ques-a)

Let $N$ be the north celestial pole and $d$ be our desired distance. Then, the spherical law of cosines in $\triangle{N\gamma\chi}$ gives
$$
\cos{d} = \cos{90^{\circ}}\cos{(90^{\circ}-\delta)} + \sin{90^{\circ}}\sin{(90^{\circ}-\delta)}\cos{\alpha},
$$
which implies $d = \arccos{(\cos{\delta}\cos{\alpha})}\approx 17.96^{\circ}$.

<a id="sol-b"></a>

<a id="(b)-[(ques)](#ques-b)"></a>

#### (b) [(ques)](#ques-b)

Since $\chi$ is to his east, it has not yet culminated. Also, since he is not moving, $\chi$ achieves its minimum zenith distance as it culminates. 

One way to figure out this minimum zenith distance is to consider the view from his horizon. $\chi$ moves through the small circle representing the declination line at $\delta$. Since he is located on the equator, the celestial equator from his perspective passes through the zenith. Therefore, the minimum zenith distance is the distance between the declination line at $\delta$, and the celestial equator, which is  $\delta = 10^{\circ}$.

An alternative approach is to consider his movement through the celestial sphere. Culmination occurs when his location and $\chi$ have the same right ascension. At this point, their distance is $\delta$, so this is the minimum zenith distance.

<a id="sol-c"></a>

<a id="(c)-[(ques)](#ques-c)"></a>

#### (c) [(ques)](#ques-c)
    
$\chi$ starts in the northeastern quadrant of the sky. When $\chi$ crosses the north-south meridian, it changes from the east to west hemisphere. When $\chi$ crosses the the east-west meridian, it changes from the north to south hemisphere.
    
At time $t$, his location in the celestial sphere is given by $(\omega t, \omega t/4)$, so $(\alpha, \alpha/4)$ is a point in his trajectory. Since $\alpha/4 < \delta$,  $\chi$ culminates in his northern sky. Thus, $\chi$ passes the north-south meridian before passing the east-west meridian.

<a id="sol-d"></a>

<a id="(d)-[(ques)](#ques-c)"></a>

#### (d) [(ques)](#ques-c)

$\chi$ culminates when it has the same right ascension as Andrew, so $\omega t = \alpha$. So, the zenith distance is given by

$$
\delta - \frac{\alpha}{4} \approx 6.25^{\circ}.
$$

<a id="sol-e"></a>

<a id="(e)-[(ques)](#ques-e)"></a>

#### (e) [(ques)](#ques-e)

Let $D$ be his position in the celestial sphere. When $\chi$ first crosses the east-west meridian, $D$ must satisfy $\angle ND\chi = 90^{\circ}$, as shown in the diagram below. The red line in the diagram represents his trajectory in the celestial sphere (this trajectory is not a great circle, so we cannot use it in our calculations). 

<div class="flex justify-center">

<img src="/assets/images/logs/l21.png" width="75%" height="75%" alt="sphere"/>

</div>

Now, chasing angles:
- The perpendicular condition implies that $D$ is the apex of another great circle (call $\Gamma$) that passes through both $D$ and $\chi$. $\Gamma$ intersects the equator at a point $A$, such that $DA = 90^{\circ}$.  
- As labelled in the diagram, let $B$ and $C$ be the feet of $\chi$ and $D$ from $N$, respectively (so that $\angle \chi BA = \angle DCA = 90^{\circ}$). Since $D$ is the apex of $\Gamma$, $DA = CA = 90^{\circ}$. 
- We know $\gamma B = \alpha$ and $\gamma C = \omega t$, so $AB = 90^{\circ}+\alpha-\omega t$.
- We also know that $\chi B = \delta$, and $DC = \omega t/4$.

Our goal is to find the zenith distance, which is $\chi D$. To find this arc, we'll need $\omega t$, which will let us solve for the right ascension of $D$. Let $\varepsilon = \angle{\chi AB} = \angle{DAC}$. The four-parts formula in both $\triangle{\chi AB}$ and $\triangle{DAC}$ gives 
$$
\tan{\varepsilon} = \frac{\tan \chi B}{\sin AB} = \frac{\tan DC}{\sin AC}.
$$
Substituting known values, this reduces to the equation 
$$
\tan \delta = \cos{(\omega t - \alpha)}\tan{\left(\frac{\omega t}{4}\right)}\implies \omega t = 4\arctan \left(\frac{\tan \delta}{\cos(\omega t - \alpha)}\right).
$$
We can use this to numerically iterate for $\omega t$. Our initial guess does not need to be good; any value from around $10^{\circ}$ to $70^{\circ}$ converges in a few iterations, giving us $\omega t\approx 46.97^{\circ}$.

Finally, a few more angles:
- $\angle \chi ND = \angle BNC = \omega t - \alpha$.
- $N\chi = 90^{\circ}-\delta$.
- $ND = 90^{\circ} - \omega t/4$.

These are all known values. The spherical law of cosines in $\triangle{N\chi D}$ now gives
$$
\chi D = \arccos{\left(\sin \delta \sin \left(\frac{\omega t}{4}\right) + \cos{(\omega t-\alpha)}\cos \delta \cos{\left(\frac{\omega t}{4}\right)}\right)}\approx 31.42^{\circ}.
$$

<a id="sol-f"></a>

<a id="(f)-[(ques)](#ques-f)"></a>

#### (f) [(ques)](#ques-f)

The zenith distance $\chi X$ is minimized when $\angle \chi X\gamma = 90^{\circ}$. Let $X'$ be the foot of $X$ from $N$, so that $\angle NX'\gamma = 90^{\circ}$. Then, if we let $\beta = \angle NX\chi$:
- $N, X, X'$ lie on the same great circle, $\angle NX\chi + \angle \chi X\gamma + \angle \gamma X X' = 180^{\circ}$, which implies $\angle \gamma XX' = 90-\beta$.
- Since the latitude of $X$ is small, and $\triangle{XX'\gamma}$ is right, we can say that $\angle \gamma XX' + \angle X\gamma X'\approx 90^{\circ}$, so $\angle X\gamma X' \approx \beta$. This approximation is valid since $\gamma X' = \omega t = 4X'X$, so $\triangle{XX'\gamma}$ can be approximated by a flat right triangle.
- Since $\angle N\gamma X' = 90^{\circ}$, $\beta$ and $\angle N\gamma X$ add to $90^{\circ}$, as desired.

To compute $\beta$, we can use our approximation of $\triangle{XX'\gamma}$ as a flat right triangle to say that $\tan{\beta}\approx 1/4$, so $\beta\approx 14^{\circ}$.

<a id="sol-g"></a>

<a id="(g)-[(ques)](#ques-g)"></a>

#### (g) [(ques)](#ques-g)

Consider $\triangle{NX\chi}$. We know the lengths of two sides, $N\chi = 90^{\circ}-\delta$ and $NX = 90^{\circ}-\omega t/4$, and the values of a nested and adjacent angle, $\angle N = \omega t-\alpha$ and $\angle X = \beta$. We want to find the length of the zenith angle, which is $X\chi$. Unfortunately, we can't directly solve for $X\chi$, but we may first try solving for $\omega t$ using the information we already have, which will give us enough information about the triangle to solve for $X\chi$.

Applying the four parts formula:
$$
\sin{\left(\frac{\omega t}{4}\right)}\cos{(\omega t - \alpha)} = \cos{\left(\frac{\omega t}{4}\right)}\cot{(90^{\circ}-\delta)} - \sin{(\omega t - \alpha)}\cot{\beta}.
$$

As in part (e), we can isolate $\omega t$ and try to solve this equation with numerical iteration:
$$
\omega t = 4\arctan{\left(\frac{\tan \delta}{\cos{(\omega t-\alpha)}} - \frac{\sin{(\omega t- \alpha)}\cot \beta}{\cos{(\omega t/4)}\cos{(\omega t - \alpha)}}\right)}.
$$
Unfortunately, this diverges for most values. Luckily, we're given that $\omega t$ is within $(\alpha\pm 2^{\circ})$, which is a good enough range for us to still find a solution at $\omega t\approx 16.45^{\circ}$.

Finally, the law of sines in $\triangle{X\chi N}$ gives 
$$
\chi X = \arcsin{\left(\frac{\cos{\delta}\sin{(\omega t - \alpha)}}{\sin{\beta}}\right)}\approx 6.06^{\circ}.
$$

<a id="section-2"></a>

### Section 2

<a id="sol-h"></a>

<a id="(h)-[(ques)](#ques-h)"></a>

#### (h) [(ques)](#ques-h)

The vertical component of $v_t$ is given by $v\sin{\zeta}$, while the horizontal component is given by $v\cos{\zeta} + \omega R_{\oplus}\cos{\phi}$. Therefore,
$$
\tan{\theta} = \frac{v\sin{\zeta}}{v\cos{\zeta} + \omega R_{\oplus}\cos{\phi}}.
$$

<a id="sol-i"></a>

<a id="(i)-[(ques)](#ques-i)"></a>

#### (i) [(ques)](#ques-i)

The key for this part is to draw good diagrams. Below is a larger picture of the trajectory:
<div class="flex justify-center">

<img src="/assets/images/logs/l22.png" width="75%" height="75%" alt="sphere"/>

</div>

Below we decompose the trajectory:

<div class="flex justify-center">

<img src="/assets/images/logs/l23.png" width="75%" height="75%" alt="sphere"/>

</div>

In the diagram, $x_t$ and $x_{t+1}$ represent two points in his trajectory that are close together. Note that $v$ always points at $\chi$, while $v_r$ always points in the horizontal direction. From the diagram, we can see how $\Delta z$ and $\Delta \lambda$ are related:

$$
\frac{\vert \Delta z\vert}{\cos{(\zeta - \theta)}} = \frac{\Delta \lambda \cos{\phi}}{\cos{\theta}}\implies \Delta \lambda = \frac{\vert \Delta z\vert\cos{\theta}}{\cos{(\zeta - \theta)}\cos \phi}.
$$

<a id="sol-j"></a>

<a id="(j)-[(ques)](#ques-j)"></a>

#### (j) [(ques)](#ques-j)

The zenith distance approaches its minimum value when the vectors $v$ and $v_t$ are perpendicular, since this indicates that it will no longer be possible for him to move closer to $\chi$ due to Earth's rotation.

In other words, this happens when $\zeta - \theta = 90^{\circ}$. Substituting this into our expression from part (h), 

$$
\frac{\sin \theta}{\cos \theta} = \frac{v\cos \theta}{-v\sin \theta + \omega R_{\oplus}\cos{\phi}},
$$

which implies

$$
\cos{\phi}\sin{\theta} = \frac{v}{\omega R_{\oplus}} = \frac{1}{4}.
$$

**Remark.** Note that the condition $\zeta - \theta = 90^{\circ}$ agrees with the equation derived in part (i). As we approach the minimum zenith angle, the amount of horizontal distance needed to travel in order to change the zenith angle by a fixed $\Delta z$ effectively approaches infinity.

<a id="section-3"></a>

### Section 3

<a id="sol-k"></a>

<a id="(k)-[(ques)](#ques-k)"></a>

#### (k) [(ques)](#ques-k)

In order for $\chi$ to be directly overhead, he needs to have the same declination and right ascension as $\chi$. 
    
The amount of time he needs to increase his latitude to $\delta$ is bounded below by 

$$
\delta/(v/R_{\oplus}) = \frac{4\delta}{\omega},
$$

which is when he travels straight north at all times. 
    
On the other hand, the amount of time it takes him to have the same right ascension is bounded above by 
$$
\alpha/(\omega - v/R_{\oplus}) = \frac{4\alpha}{3\omega},
$$

which is when he travels straight west at all times. Since $4\alpha/3 < 4\delta$, he cannot get $\chi$ to his zenith when it first culminates. 

<a id="sol-l"></a>

<a id="(l)-[(ques)](#ques-l)"></a>

#### (l) [(ques)](#ques-l)

From part (h), he cannot get $\chi$ directly overhead the first time it culminates. Therefore, his best strategy is to try to get $\chi$ to his zenith the next time it appears above his horizon. After time $t$, the change in his right ascension due to the rotation of the earth is $\omega t$. Therefore, to optimize his distance travelled, he should travel along a great circle (defined on the surface of the Earth) that increases his longitude by $(2\pi + \alpha - \omega t)$, and increases his latitude by $\delta$. 

Let $N$ be the north celestial pole, and $Y$ be his stopping point, which has coordinates $(2\pi + \alpha-\omega t, \delta)$. Note that the coordinates of $Y$ are his longitude and latitude on Earth, and not in the celestial sphere. Also, $Y\gamma = \omega t/4$, since the maximum speed his boat can travel is $\omega R_{\oplus}/4$. Now, the spherical law of cosines in $\triangle{NY\gamma}$ gives 
$$
\cos{\left(\frac{\omega t}{4}\right)} = \cos{\delta}\cos{(\alpha - \omega t)},
$$
so 
$$
\omega t = 4\arccos(\cos \delta \cos{(\alpha - \omega t)}).
$$
Now we can numerically iterate. Using $t = \text{20 hrs}$ as a first guess, we get $\omega t = 300.2^{\circ}$, which gives $(t-\text{20 hrs})\approx 48\text{ s}$. To account for approximation errors, a large range of values in this general vicinity are acceptable.
