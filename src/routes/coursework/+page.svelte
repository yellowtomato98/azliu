<script lang="ts">
  import type { Course } from "$lib/types";

  const course6: Array<Course> = [
    {
      number: "6.780 [6.437]",
      title: "Inference and Information",
      links: [],
      grad: true,
      current: true,
    },
    {
      number: "6.790 [6.867]",
      title: "Machine Learning",
      links: [
        {
          title: "notes",
          href: "/assets/pdf/6_790_Notes.pdf",
        },
      ],
      grad: true,
    },
    {
      number: "6.820 [6.884]",
      title: "Sensorimotor Learning",
      links: [],
      grad: true,
      current: true,
    },
    {
      number: "6.584 [6.824]",
      title: "Distributed Systems",
      links: [],
      grad: true,
      current: true,
    },
    {
      number: "6.106 [6.172]",
      title: "Software Performance Engineering",
      links: [],
    },
    {
      number: "6.861 [6.806]",
      title: "Advanced NLP",
      links: [],
    },
    {
      number: "6.102 [6.031]",
      title: "Software Construction",
      links: [],
      current: true,
    },
    {
      number: "6.191 [6.004]",
      title: "Computation Structures",
      links: [],
    },
    {
      number: "6.122 [6.046]",
      title: "Design and Analysis of Algorithms",
      links: [
        {
          title: "notes",
          href: "/assets/pdf/6_122_Notes.pdf",
        },
      ],
    },
    {
      number: "6.181 [6.039]",
      title: "Operating Systems",
      links: [],
    },
    {
      number: "6.962 [6.148]",
      title: "web.lab",
      links: [
        {
          title: "project",
          href: "https://github.com/azliu0/mazed",
        },
      ],
    },
  ];

  const course18: Array<Course> = [
    {
      number: "18.656",
      title: "Non-Asymptotic Statistics",
      links: [],
      grad: true,
      current: true,
    },
    {
      number: "18.615",
      title: "Stochastic Processes",
      links: [
        {
          title: "notes",
          href: "/assets/pdf/18_615_Notes.pdf",
        },
      ],
      grad: true,
    },
    {
      number: "18.701",
      title: "Abstract Algebra",
      links: [
        {
          title: "notes",
          href: "/assets/pdf/18_701_Notes.pdf",
        },
      ],
    },
    {
      number: "18.650",
      title: "Statistics",
      links: [
        {
          title: "notes",
          href: "/assets/pdf/18_650_Notes.pdf",
        },
      ],
    },
    {
      number: "6.S095",
      title: "Probability",
      links: [
        {
          title: "notes",
          href: "/assets/pdf/6_S095_Notes.pdf",
        },
      ],
    },
  ];
</script>

<div class="space-y-6">
  <p>
    See <a
      href="https://github.com/azliu0/_andrew.sty"
      target="_blank"
      class="coursework-ref">here</a
    > for my style package.
  </p>
</div>

<ul>
  {#each course6 as course}
    <li>
      {course.number}: {course.title}
      {#each course.links as link}
        {" "}(<a href={link.href} target="_blank" class="coursework-ref"
          >{link.title}</a
        >)
      {/each}
    </li>
  {/each}
</ul>
<ul>
  {#each course18 as course}
    <li>
      {course.number}: {course.title}
      {#each course.links as link}
        {" "}(<a href={link.href} target="_blank" class="coursework-ref"
          >{link.title}</a
        >)
      {/each}
    </li>
  {/each}
</ul>

<div class="mb-[7.5rem]" />
