"use client";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command, 
    CommandEmpty, 
    CommandGroup, 
    CommandInput, 
    CommandItem,
    CommandList,
} from "@/components/ui/command";

import {
    Popover, 
    PopoverContent, 
    PopoverTrigger,
} from "@/components/ui/popover";

const languages = [
    {
        value: "python",
        label: "Python",
    }, 

    {
        value: "matlab", 
        label: "Matlab",
    },

    {
        value: "R", 
        label: "R",
    }, 

    {
        value: "java", 
        label: "Java",
    }, 

    {
        value: "C++", 
        label: "C++",
    },
];

interface ComboBoxProps{
    onLanguageChange: (value: string) => void;
}

export function ComboBox({onLanguageChange = () => {}}: ComboBoxProps) {
//export function ComboBox() {
    
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
   
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[100px] justify-between bg-primary"
          >
            {value
              ? languages.find((language) => language.value === value)?.label
              : languages[0].label}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-70" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[150px] p-0">
          <Command>
            <CommandInput placeholder="Search..." />
            <CommandEmpty>No language found.</CommandEmpty>
            <CommandGroup>
                <CommandList>
              {languages.map((language) => (
                
                    <CommandItem
                    key={language.value}
                    value={language.value}
                    onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue)
                        setOpen(false)
                        onLanguageChange(currentValue === value ? "" : currentValue);
                    }}
                    >
                    <Check
                        className={cn(
                        "mr-2 h-4 w-4",
                        value === language.value ? "opacity-100" : "opacity-0"
                        )}
                    />
                    {language.label}
                    </CommandItem>
                
              ))}
              </CommandList>
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    )
}