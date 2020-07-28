<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.1.4/tailwind.min.css" rel="stylesheet">
          <style>

          html, body { height: 100vh; }

          body {

            display: flex;
            align-items: center;
            justify-content: center;

          }

          button {

            background-color: green;

          }

          .tooltip {

            background: black;
            color: white;
            padding: 10px;
            border-radius: 5px;

          }

          </style>
    </head>
    <body>

      <div id="app">

        <!-- <nav>

          <div class="inline">
            <a href="/home">Home</a>
          </div>

          <div class="inline">
          <a href="/work">Work</a>
          </div>

          <about-dropdown></about-dropdown>

        </nav>

        <portal-target name="nav-after"></portal-target> -->

        <!-- <div>
          <p>
            Hello, <span data-tooltip="tooltip" data-tooltip-placement="right">HOVER ME</span>.
          </p>
        </div>

        <div>
          <p>
            Hello, <span v-tooltip:top="'tooltip 2'">HOVER ME</span>.
          </p>
        </div>

          <p>
            Hello there, <span data-tooltip-name="People">Other people</span>.
          </p>


        <tooltip name="People">

          <h5>hello</h5>
          <p>doors close</p>

        </tooltip> -->


        <!-- <carousel :autoplay="true">

          <img src="https://www.w3schools.com/howto/img_snow.jpg" alt="">
          <img src="https://www.w3schools.com/howto/img_snow.jpg?2" alt="">

        </carousel>-->


        <ul class="tw-leading-loose">

          <li><contact></contact></li>

        </ul>

          <!-- <accordion title="???????" body="hello">
             :items="$questions"
          </accordion> -->



      </div>

        <script src="/js/app.js"></script>

    </body>
</html>
