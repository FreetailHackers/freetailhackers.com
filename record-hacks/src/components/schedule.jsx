import React, { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import dayjs from "dayjs";

import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

// Extend plugins BEFORE using dayjs.tz
dayjs.extend(utc);
dayjs.extend(timezone);

const MusicNote = ({ className, pathClassName }) => {
  return (
    <div id="schedule">
      <svg
        className={className || ""}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_427_736"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_427_736)">
          <path
            className={pathClassName || ""}
            d="M10 21C8.9 21 7.95833 20.6083 7.175 19.825C6.39167 19.0417 6 18.1 6 17C6 15.9 6.39167 14.9583 7.175 14.175C7.95833 13.3917 8.9 13 10 13C10.3833 13 10.7375 13.0458 11.0625 13.1375C11.3875 13.2292 11.7 13.3667 12 13.55V3H18V7H14V17C14 18.1 13.6083 19.0417 12.825 19.825C12.0417 20.6083 11.1 21 10 21Z"
            fill="#030303"
          />
        </g>
      </svg>
    </div>
  );
};

const categoryStyles = {
  "Key-Event": {
    bg: "bg-orange",
    text: "text-orange",
    fill: "fill-orange",
  },
  "Regular-Event": {
    bg: "bg-pink",
    text: "text-pink",
    fill: "fill-pink",
  },
  Workshop: {
    bg: "bg-yellow",
    text: "text-yellow",
    fill: "fill-yellow",
  },
  "Speaker-Event": {
    bg: "bg-red",
    text: "text-red",
    fill: "fill-red",
  },
  "Fun-Event": {
    bg: "bg-green-500",
    text: "text-green-500",
    fill: "fill-green-500",
  },
};

const ScheduleItem = ({
  name,
  description,
  location,
  start,
  end,
  type,
  isActive,
}) => {
  // Extract the time from the start
  const startTime = new Date(start).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const endTime = end
    ? new Date(end).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  console.log(end);

  return (
    <div
      className={`flex flex-row items-stretch gap-x-2.5 border-t-[3px] border-b-0 border-black px-5 py-4 ${isActive ? "" : "opacity-50"}`}
    >
      <div className="font-heading min-w-[8rem] max-w-[8rem] text-[24px] font-black whitespace">
        {startTime} {endTime ? "- " + endTime : ""}
      </div>
      <div className="w-0.5 shrink-0 self-stretch bg-black"></div>
      <div className="flex grow items-center">
        <div className="flex flex-col">
          <div className="text-[24px] leading-[1.4]">{name}</div>
          <div className="text-gray my-1 text-[20px] leading-[1.4]">
            {location}
          </div>
          <div className="text-gray text-[20px] leading-[1.4]">
            {description}
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <MusicNote
          className="size-5"
          pathClassName={categoryStyles[type].fill}
        />
      </div>
    </div>
  );
};

const Schedule = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategories, setActiveCategories] = useState(new Set());
  const [eventsByDay, setEventsByDay] = useState({});

  const toggleCategory = (category) => {
    setActiveCategories((prev) => {
      const updated = new Set(prev);
      if (updated.has(category)) {
        updated.delete(category);
      } else {
        updated.add(category);
      }
      return updated;
    });
  };

  // Group events by date
  const groupEventsByDate = (eventsList) => {
    const grouped = {};

    eventsList.forEach((event) => {
      event.start += "Z";

      if (event.end) {
        event.end += "Z";
        event.end = dayjs.utc(event.end).tz("America/Chicago");
      }

      const start = dayjs.utc(event.start).tz("America/Chicago");
      const dateKey = start.format("YYYY-MM-DD");

      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }

      grouped[dateKey].push(event);
    });

    return grouped;
  };

  // Format date for display
  const formatDateHeader = (dateString) => {
    return dayjs(dateString).tz("America/Chicago").format("dddd");
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("Event").select("*");

      if (data) {
        // Sort data by start date
        data.sort((a, b) => {
          const dateComparison = new Date(a.start) - new Date(b.start);
          if (dateComparison === 0) {
            return a.id - b.id; // Secondary sort by ID
          }
          return dateComparison;
        });

        // Get all the unique categories
        const uniqueCategories = new Set(data.map((event) => event.type));

        setCategories(Array.from(uniqueCategories));
        setActiveCategories(uniqueCategories);

        // Group events by date
        const grouped = groupEventsByDate(data);
        setEventsByDay(grouped);
      }
    };

    getData();
  }, []);

  if (!categories || categories.length === 0) {
    return null;
  }

  // Get sorted date keys
  const dateKeys = Object.keys(eventsByDay).sort();

  return (
    <section id="schedule" className="mx-auto w-full max-w-[1200px] py-12">
      <h2 className="font-heading mb-3 text-[48px] font-bold tracking-[0.12em]">
        WHAT'S ON THE RECORD?
      </h2>

      <div className="mb-10 w-fit max-w-full">
        <div className="w-full rounded-[32px] bg-black px-4 py-3">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`flex flex-shrink-0 items-center gap-x-1 rounded-full px-2 py-1 leading-0 whitespace-nowrap transition-all duration-300 hover:cursor-pointer ${
                  activeCategories.has(category)
                    ? categoryStyles[category].bg
                    : `bg-black ${categoryStyles[category].text}`
                }`}
              >
                <MusicNote
                  className="size-5"
                  pathClassName={
                    activeCategories.has(category)
                      ? "fill-black"
                      : categoryStyles[category].fill
                  }
                />
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic grid based on number of days */}
      <div
        className={`grid w-full gap-6 ${
          dateKeys.length > 2
            ? "grid-cols-1 min-[876px]:grid-cols-2"
            : dateKeys.length === 2
              ? "grid-cols-1 min-[876px]:grid-cols-2"
              : "grid-cols-1"
        }`}
      >
        {dateKeys.map((dateKey) => {
          // Don't filter events, get all of them for the date
          const dayEvents = eventsByDay[dateKey];

          return (
            <div
              key={dateKey}
              className="flex h-fit flex-col rounded-2xl border-[3px] border-black pb-5"
            >
              <div className="ml-11 py-5">
                <h3 className="font-heading text-[32px] leading-[1.2] font-black">
                  {formatDateHeader(dateKey)}
                </h3>
              </div>
              {/*console.log(event);*/}
              {dayEvents.map((event) => (
                <ScheduleItem
                  key={event.id}
                  {...event}
                  isActive={activeCategories.has(event.type)}
                />
              ))}
              {dayEvents.length === 0 && (
                <div className="px-5 py-4 text-center text-gray-500">
                  No events for this date
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="text-gray mt-3 text-right text-[20px] leading-[1.4]">
        *Schedule is subject to change
      </div>
    </section>
  );
};

export default Schedule;
