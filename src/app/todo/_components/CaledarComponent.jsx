"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function CaledarComponent({ onEndDate, oldDate }) {
  const [date, setDate] = useState(oldDate);

  const handleDateChange = (date) => {
    onEndDate(date);
    setDate(date);
  };

  return (
    <Popover className="w-full">
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[380px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateChange}
          initialFocus
          minDate={new Date()}
        />
      </PopoverContent>
    </Popover>
  );
}
