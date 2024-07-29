import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCopyToClipboard } from 'usehooks-ts';
//import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline"
import { Files, FileCheck2 } from 'lucide-react';


interface CopyButtonProp{
    copyInput: string;
}

export default function CopyButton({copyInput}: CopyButtonProp){
    const [copied, setCopied] = useState(false);
    const [value, copy] = useCopyToClipboard();
    
    return (
        <Button 
        onMouseLeave={() => setCopied(false)}
        onClick={() => {
            copy(copyInput);
            setCopied(true);
        }}>
            {copied ? (
                <>
                  <FileCheck2/>
                  Copied
                </>
            ): (
                <>
                  <Files/>
                  Copy
                </>
            )}
        </Button>
    )
}