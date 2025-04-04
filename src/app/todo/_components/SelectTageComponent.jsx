"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectTageComponent({ onSelectTag, tag }) {
  const [selectedValue, setSelectedValue] = React.useState(tag);
  const handleSelectChange = (value) => {
    setSelectedValue(value);
    onSelectTag(value);
  };

  return (
    <Select onValueChange={handleSelectChange} value={selectedValue}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="DESIGN">DESIGN</SelectItem>
          <SelectItem value="DATABASE">DATABASE</SelectItem>
          <SelectItem value="FEATURE">FEATURE</SelectItem>
          <SelectItem value="DOCUMENTATION">DOCUMENTATION</SelectItem>
          <SelectItem value="MINI_PROJECT">MINI_PROJECT</SelectItem>
          <SelectItem value="GIT">GIT</SelectItem>
          <SelectItem value="ASSIGNMENT">ASSIGNMENT</SelectItem>
          <SelectItem value="HOMEWORK">HOMEWORK</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
