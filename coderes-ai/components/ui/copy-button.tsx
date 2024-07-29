import { useState } from 'react';
import { useCopyToClipboard } from 'usehooks-ts';
import { Files, FileCheck2 } from 'lucide-react';

import { Button } from '@/components/ui/button';


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